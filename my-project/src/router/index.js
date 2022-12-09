import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import User from "../views/UserView.vue";

let routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user",
    component: User,
  },
];

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
