<script setup lang="ts">
import PDFIcon from '../../../../components/Icons/PDFIcon.vue'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import router from '../../../../router'
import { BreadcrumbsProps } from '../../UserManagement/UserRegistration/interface'
import formOne from '/pdf-forms/JFP-Personal-Loan-Application-Form-6.17.22-Approved-by-Atty.-Rowell-4.pdf'
// import formTwo from '/pdf-forms/JFP-Loan-Application-Form-Partnership-Corporation-For-Printing-1.pdf'
import { PDFDocument } from 'pdf-lib'
import { onMounted, ref } from 'vue'
import SignaturePad from 'signature_pad'

const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'Transaction',
    to: '#',
  },
  {
    label: 'Offer',
    to: '#',
  },
  {
    label: 'New Application',
    to: '#',
  },
]

const unitBranch = ref<string>('')

// Create a ref for the canvas element
const canvas = ref<HTMLCanvasElement | null>(null)
let signaturePad: SignaturePad | null = null // Variable to store the SignaturePad instance

// Function to clear the signature
const clearSignature = () => {
  if (signaturePad) {
    signaturePad.clear()
  }
}

// Initialize SignaturePad on component mount
onMounted(() => {
  // Ensure that the canvas element exists before initializing SignaturePad
  if (canvas.value) {
    signaturePad = new SignaturePad(canvas.value, {
      // Configure SignaturePad options here
      // For example:
      // backgroundColor: 'rgb(255, 255, 255)',
      // penColor: 'rgb(0, 0, 0)'
    })
  }
})

const downloadPdf = async () => {
  const response = await fetch(formOne)
  const arrayBuffer = await response.arrayBuffer()
  const pdfDoc = await PDFDocument.load(arrayBuffer)
  // Get the first page
  const page = pdfDoc.getPages()

  // Fill in form fields
  page[0].drawText(unitBranch.value, { x: 20, y: 735, size: 12 })

  // Add Signatures
  const signatureDataUrl = signaturePad?.toDataURL()
  const signatureBlob = await fetch(signatureDataUrl!).then((res) => res.blob())
  const signatureArrayBuffer = await new Response(signatureBlob).arrayBuffer()

  // Embed the signature image to the PDF
  const signatureImage = await pdfDoc.embedPng(signatureArrayBuffer)
  page[3].drawImage(signatureImage, {
    x: 25,
    y: 280,
    width: 150,
    height: 50,
  })

  const pdfBytes = await pdfDoc.save()

  // Create a Blob from the PDF data
  const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' })

  // Create a URL for the Blob
  const pdfUrl = URL.createObjectURL(pdfBlob)

  // Create a link element to trigger the download
  const downloadLink = document.createElement('a')
  downloadLink.href = pdfUrl
  downloadLink.download = 'filled-form.pdf' // Set the desired file name

  // Trigger the download
  downloadLink.click()

  // Clean up by revoking the URL
  URL.revokeObjectURL(pdfUrl)
}
</script>

<template>
  <q-page padding>
    <PageHeader
      title="New Application"
      :back="true"
      :breadcrumbs="breadcrumbs"
    />
    <div class="button-container">
      <q-btn color="red" @click="downloadPdf">
        <PDFIcon />
        PDF
      </q-btn>
      <q-btn color="warning" @click="router.push('/offer/edit-offer')">
        Edit
      </q-btn>
    </div>

    <input v-model="unitBranch" type="text" placeholder="Unit / Branch" />
    <br />
    <br />
    <canvas ref="canvas" style="border: 2px solid black"></canvas>
    <br />
    <button @click="clearSignature">Clear Signature</button>
  </q-page>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
</style>
