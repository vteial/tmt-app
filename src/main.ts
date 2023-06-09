import { createApp } from "vue";
import { createPinia } from "pinia";
import CoreuiVue from "@coreui/vue";
import "vue-toastification/dist/index.css";
import Toast, { POSITION } from "vue-toastification";
import { createAuth0 } from "@auth0/auth0-vue";

import router from "./router";
import App from "./App.vue";

const auth0 = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin
  }
});


const app = createApp(App);

app.use(createPinia());
app.use(router);
// @ts-ignore
app.use(CoreuiVue);
app.use(Toast, { position: POSITION.TOP_CENTER, timeout: 3000 });
app.use(auth0);
app.mount("#app");
