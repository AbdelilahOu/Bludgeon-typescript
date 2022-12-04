import type { routerState } from "@/interfaces";
import { defineStore } from "pinia";

export const useRouterStore = defineStore("Router", {
  state: (): routerState => {
    return {
      RouteLinks: [
        {
          path: "/Client",
          name: "👭 Clients",
        },
        {
          path: "/Product",
          name: "📦 Products",
        },
        {
          path: "/Command",
          name: "🚚 Commands",
        },
        {
          path: "/Stock",
          name: "🏪 Stocks",
        },
        {
          path: "/Stats",
          name: "📉 Stats",
        },
      ],
      ValidRouteLinks: [
        {
          path: "/Client",
          StyledPath: "👭 Clients",
        },
        {
          path: "/Product",
          StyledPath: "📦 Products",
        },
        {
          path: "/Command",
          StyledPath: "🚚 Commands",
        },
        {
          path: "/Stock",
          StyledPath: "🏪 Stocks",
        },
        {
          path: "/Stats",
          StyledPath: "📉 Stats",
        },
        {
          path: "/Sitting",
          StyledPath: "⚙ Sittings",
        },
      ],
      ActiveLink: "Home",
    };
  },
  actions: {
    setActiveLink: function (path: string) {
      const theLink = this.ValidRouteLinks.find((a) => a.path == path);
      this.ActiveLink = theLink ? theLink.StyledPath : "Home";
    },
  },
});
