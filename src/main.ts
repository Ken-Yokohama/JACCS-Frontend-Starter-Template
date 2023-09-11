import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
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
  plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
