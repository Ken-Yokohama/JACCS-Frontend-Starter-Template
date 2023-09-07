<script setup lang="ts">
import ComponentTitle from '../components/ComponentTitle.vue'
const onItemClick = () => {
  alert('Clicked on an Item')
}
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="pan_tool_alt">Buttons</ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">Standard Buttons</h5>
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">With Icons</h5>
      <q-btn color="primary" icon="mail" label="On Left" />
      <q-btn color="secondary" icon-right="mail" label="On Right" />
      <q-btn
        color="red"
        icon="mail"
        icon-right="send"
        label="On Left and Right"
      />
      <br />
      <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
      <q-btn round color="primary" icon="shopping_cart" />
      <q-btn square color="primary" icon="shopping_cart" />
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-y-md column items-start">
      <h5 class="text-weight-bold q-my-md">Button Group</h5>
      <q-btn-group push>
        <q-btn push label="First" icon="timeline" />
        <q-btn push label="Second" icon="visibility" />
        <q-btn push label="Third" icon="update" />
      </q-btn-group>
      <q-btn-group rounded>
        <q-btn color="amber" rounded glossy icon="timeline" />
        <q-btn color="amber" rounded glossy icon="visibility" />
        <q-btn
          color="amber"
          rounded
          glossy
          icon-right="update"
          label="Update"
        />
      </q-btn-group>
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">Dropdown Button</h5>
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item v-close-popup clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-close-popup clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-close-popup clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<style scoped></style>
