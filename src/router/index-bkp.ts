import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/PublicLayout.vue";
import ClientsView from "@/views/ClientsView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import TimesView from "@/views/TimesView.vue";
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: DashboardView
        },
        {
          path: "/times",
          name: "Times",
          component: TimesView
        },
        {
          path: "/projects",
          name: "Projects",
          component: ProjectsView
        },
        {
          path: "/clients",
          name: "Clients",
          component: ClientsView
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/SlashView.vue")
    }
  ]
});

export default router;
