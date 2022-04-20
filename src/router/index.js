import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home";
import SearchView from "@/views/Search";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
