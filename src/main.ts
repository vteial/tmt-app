import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CoreuiVue from '@coreui/vue'
import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// @ts-ignore
app.use(CoreuiVue)
app.use(Toast, { position: POSITION.TOP_CENTER, timeout: 3000 });
app.mount('#app')
