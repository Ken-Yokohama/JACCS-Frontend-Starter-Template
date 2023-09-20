import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Quasar, Dialog, Notify } from 'quasar'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Quasar libraries and css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
  }, // import Quasar plugins and add here
  config: {
    brand: {
      primary: '#33ad69',
      secondary: '#348aa7',
      accent: '#e70012',
      dark: '#242424',
      'dark-page': '#121212',
      positive: '#CCCCCC',
      negative: '#FF0000',
      info: '#31CCEC',
      warning: '#F2C037',
    },
  },
})

app.mount('#app')
