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
    children: [
      {
        path: "all",
        name: "issuesAll",
        component: () => import("@/views/Issues/components/IssuesAll"),
      },
      {
        path: "detail/:IssueKey",
        name: "issueDetail",
        component: () => import("@/views/Issues/components/IssueDetail"),
      },
      {
        path: "search/:SearchValue",
        name: "issuesSearch",
        component: () => import("@/views/Issues/components/IssuesSearch"),
      },
    ],
  },
  // {
  //   path: "/issues/:IssueKey",
  //   name: "issueDetail",
  //   component: () => import("@/views/Issues/components/IssueDetail"),
  // },
  // {
  //   path: "/issues/detail/:IssueKey",
  //   name: "issueDetail",
  //   component: () => import("@/views/Issues/components/IssueDetail"),
  // },
  // {
  //   path: "/issues/search",
  //   name: "issueDetail",
  //   component: IssuesView,
  // },
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
