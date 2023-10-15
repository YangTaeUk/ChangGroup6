/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import '../service-worker.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js').then(() => {
    console.log("[good] Service Worker Registered")
  })
}


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
