import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPlausible } from 'v-plausible/vue'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)

const title = import.meta.env.VITE_APP_TITLE || 'Alan adı satılık'
document.title = title

const plausible = createPlausible({
  init: {
    domain: import.meta.env.VITE_DOMAIN_NAME,
    apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST,
    trackLocalhost: true
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true
  },
  partytown: false
})

app.use(plausible)
app.use(createPinia())
app.use(router)

app.mount('#app')
