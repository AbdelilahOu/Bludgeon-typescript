import { createRouter, createWebHistory } from "vue-router";
import { NotificationsView } from "@/views/content/NotificationsView";
import { CommandDetails } from "@/views/content/CommandDetails";
import { CommandIndex } from "@/views/content/CommandIndex";
import { ProductView } from "@/views/content/ProductView";
import { CommandView } from "@/views/content/CommandView";
import { InvoiceView } from "@/views/content/InvoiceView";
import { VendorView } from "@/views/content/VendorView";
import { ClientView } from "@/views/content/ClientView";
import { StockView } from "@/views/content/StockView";
import { StatsView } from "@/views/content/StatsView";
import { IndexView } from "../views/IndexView";
import { AuthView } from "@/views/AuthView";
import { InvoiceDetails } from "@/views/content/InvoiceDetails";
import { InvoiceIndex } from "@/views/content/InvoiceIndex";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: IndexView,
      children: [
        {
          path: "Products",
          name: "Products",
          component: ProductView,
        },
        {
          path: "Clients",
          name: "Clients",
          component: ClientView,
        },
        {
          path: "Vendors",
          name: "Vendors",
          component: VendorView,
        },
        {
          path: "Stocks",
          name: "Stocks",
          component: StockView,
        },
        {
          path: "Commands/",
          name: "Command",
          component: CommandIndex,
          children: [
            {
              path: "all",
              name: "Commands",
              component: CommandView,
            },
            {
              path: "command/:id",
              name: "CommandDetails",
              component: CommandDetails,
            },
          ],
        },
        {
          path: "Stats",
          name: "Stats",
          component: StatsView,
        },
        {
          path: "Invoices/",
          name: "Invoice",
          component: InvoiceIndex,
          children: [
            {
              path: "all",
              name: "Invoices",
              component: InvoiceView,
            },
            {
              path: "invoice/:id",
              name: "InvoiceDetails",
              component: InvoiceDetails,
            },
          ],
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
