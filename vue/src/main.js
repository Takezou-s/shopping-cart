import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./components/HomePage.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: HomePage }],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
