import type { editModalArgs, modalsState } from "@/interfaces";
import { defineStore } from "pinia";

export const useModalStore = defineStore("ModalStore", {
  state: (): modalsState => {
    return {
      TheModal: {
        name: "",
        mode: "",
      },
    };
  },
  actions: {
    updateModal: function ({ key, value }: editModalArgs) {
      if (key == "name") {
        this.TheModal.name = value;
        return;
      }
      this.TheModal.mode = value;
    },
  },
});
