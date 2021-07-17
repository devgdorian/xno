import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-09792906.okta.com/oauth2/default",
  clientId: "0oa19d1hlnmQpi63H5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

createApp(App).use(OktaVue, { oktaAuth }).use(router).mount("#app");
