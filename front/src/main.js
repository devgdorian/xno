import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import SIGNOFF_REQUEST from "@/store/modules/auth.js";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://localhost:5001/api/";

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    if (
      error.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      this.$store.dispatch(SIGNOFF_REQUEST);
      return router.push("/");
    }
    throw error;
  }
});

const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

createApp(App).use(router).use(store).mount("#app");
