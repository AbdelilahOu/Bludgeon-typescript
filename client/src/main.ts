import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "vue3-lottie/dist/style.css";

createApp(App).use(createPinia()).use(router).mount("#app");
