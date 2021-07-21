import router from "./router";
import store from "./store";
import App from "./App.vue";
import { SIGNOFF_REQUEST } from "@/store/modules/auth.js";

import { createApp } from "vue";
import "./registerServiceWorker";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://localhost:5001/api/";

axios.interceptors.response.use(undefined, function (error) {
  if (error && error.response.status === 401) {
    store.dispatch(SIGNOFF_REQUEST);
    return router.push("/");
  }
  throw error;
});

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

createApp(App).use(router).use(store).mount("#app");
