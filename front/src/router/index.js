import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Xno from "../views/Xno.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/login/callback",
  //   component: LoginCallback,
  // },
  {
    path: "/xno",
    name: "Xno",
    component: Xno,
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(navigationGuard);

export default router;
