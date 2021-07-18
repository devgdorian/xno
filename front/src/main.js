import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://localhost:5001/api/";

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch('Logout')
            return router.push('/')
        }
    }
})

createApp(App).use(router).use(store).mount("#app");
