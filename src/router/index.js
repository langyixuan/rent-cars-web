import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    redirect: "/user",
    children: [
      {
        path: "user",
        component: () => import("@/views/user"),
      },
      {
        path: "/safe",
        component: () => import("@/views/safe"),
      },
      {
        path: "/password",
        component: () => import("@/views/safe/password.vue"),
      },
      {
        path: "/capital",
        component: () => import("@/views/safe/capital.vue"),
      },
      {
        path: "/phone",
        component: () => import("@/views/safe/phone.vue"),
      },
      {
        path: "/bank",
        component: () => import("@/views/safe/bank.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
