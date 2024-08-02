import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: 'search',
    path: '/search',
    component: Search,
  },
] satisfies RouteRecordRaw[];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
