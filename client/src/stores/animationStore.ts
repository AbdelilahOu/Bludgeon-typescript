import {
  loading,
  orderBox,
  dualingo,
  outOfStock,
  truckLeaving,
  dualingo_start,
} from "@/animations";
import type { animationState } from "@/interfaces";
import { defineStore } from "pinia";

export const useAnimationStore = defineStore("Animation", {
  state: (): animationState => {
    return {
      AnimationsNames: ["loading", "orderBox", "truckLeaving", "outOfStock"],
      Animations: [loading, orderBox, truckLeaving, outOfStock],
      IndexAnimation: dualingo_start,
      IsLoading: false,
    };
  },
  actions: {
    changeAnimation: function (animationName: string) {
      const index: number = this.AnimationsNames.indexOf(animationName);
      this.IsLoading = animationName == "loading";
      this.IndexAnimation = this.Animations[index];
    },
  },
});
