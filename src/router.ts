import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
