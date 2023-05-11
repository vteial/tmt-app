import { createRouter, createWebHistory } from "vue-router";
import SlashView from "@/views/SlashView.vue";

import PublicLayout from "@/layouts/PublicLayout.vue";
import LandingView from "@/views/LandingView.vue";
import SignUpView from "@/views/SignUpView.vue";
import SignInView from "@/views/SignInView.vue";

import PrivateLayout from "@/layouts/PrivateLayout.vue";
import DashboardView from "@/views/DashboardView.vue";
import TimesView from "@/views/TimesView.vue";
import TimeEditView from "@/views/TimeEditView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ClientsView from "@/views/ClientsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SettingsView from "@/views/SettingsView.vue";
import SignOutView from "@/views/SignOutView.vue";

// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "slash",
      component: SlashView
    },
    {
      path: "/index",
      name: "index",
      component: PublicLayout,
      redirect: "/landing",
      children: [
        {
          path: "/landing",
          name: "Landing",
          component: LandingView
        },
        {
          path: "/sign-in",
          name: "Sign In",
          component: SignInView
        },
        {
          path: "/sign-up",
          name: "Sign Up",
          component: SignUpView
        },
      ]
    },
    {
      path: "/home",
      name: "home",
      component: PrivateLayout,
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
          path: "/times/:id/edit",
          name: "Times - Add/Edit ",
          component: TimeEditView
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
        },
        {
          path: "/profile",
          name: "Profile",
          component: ProfileView
        },
        {
          path: "/settings",
          name: "Settings",
          component: SettingsView
        },
        {
          path: "/sign-out",
          name: "Sign Out",
          component: SignOutView
        },
      ]
    }
  ]
});

export default router;
