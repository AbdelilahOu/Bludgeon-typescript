import { createRouter, createWebHistory } from "vue-router";
import { NotificationsView } from "@/views/content/NotificationsView";
import { ProductView } from "@/views/content/ProductView";
import { CommandView } from "@/views/content/CommandView";
import { SittingView } from "@/views/content/SittingView";
import { ClientView } from "@/views/content/ClientView";
import { StockView } from "@/views/content/StockView";
import { StatsView } from "@/views/content/StatsView";
import { IndexView } from "../views/IndexView";
import { AuthView } from "@/views/AuthView";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: IndexView,
      children: [
        {
          path: "Product",
          name: "Product",
          component: ProductView,
        },
        {
          path: "Client",
          name: "Client",
          component: ClientView,
        },
        {
          path: "Stock",
          name: "Stock",
          component: StockView,
        },
        {
          path: "Command",
          name: "Command",
          component: CommandView,
        },
        {
          path: "Stats",
          name: "Stats",
          component: StatsView,
        },
        {
          path: "Sitting",
          name: "Sitting",
          component: SittingView,
        },
        {
          path: "Notifications",
          name: "Notifications",
          component: NotificationsView,
        },
      ],
    },
    {
      path: "/Auth",
      name: "Auth",
      component: AuthView,
    },
  ],
});

export default router;
