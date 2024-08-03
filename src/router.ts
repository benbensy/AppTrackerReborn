import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import BaseLayout from "./layouts/BaseLayout.vue";

export const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        name: "home",
        path: "/",
        component: Home,
      },
      {
        name: "search",
        path: "/search",
        component: Search,
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/Login/Login.vue"),
  },
  {
    name: "signup",
    path: "/signup",
    component: () => import("@/pages/Login/SignUp.vue"),
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
