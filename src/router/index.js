import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home";
import IssuesView from "@/views/Issues";
import TestView from "@/views/Test";

const routes = [
  {
    path: "/",
    component: HomeView,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/issues",
    name: "issues",
    component: IssuesView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
