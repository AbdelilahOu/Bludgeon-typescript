import { defineStore } from "pinia";

export const useTranslationStore = defineStore("TranslationStore", {
  state: (): translationState => {
    return {
      localLangue: localStorage.getItem("lang") ?? "fr-fr",
      translations: {
        "fr-fr": {
          product: {
            name: "Products",
            search: "search",
            addButton: "add new product",
            feilds: ["Product name", "price", "stock", "action"],
            createTitle: "create new product",
            createButton: "Create a product",
            CreateInputPlaceHolders: [
              "Name",
              "Price in DH",
              "Quantity in stock",
              "Description",
            ],
            updateInputPlaceHolders: ["Add Stock"],
            updateTitle: "Update product",
            updateButton: "Update ",
            deleteTitle: "Are you sure you wanna delete the product ",
            deleteConfirm: "Confirme",
            deleteCancel: "Cancel",
          },
          //   command: {},
          //   invoice: {},
          //   client: {},
          //   vendor: {},
          //   stock: {},
          //   stats: {},
        },
        "en-us": {
          product: { feilds: [""] },
          //   command: {},
          //   invoice: {},
          //   client: {},
          //   vendor: {},
          //   stock: {},
          //   stats: {},
        },
      },
    };
  },
});

interface translationState {
  localLangue: string;
  translations: {
    [key: string]: {
      product: { [key: string]: any; feilds: string[] };
      //   command: { [key: string]: any; feilds: string[] };
      //   invoice: { [key: string]: any; feilds: string[] };
      //   client: { [key: string]: any; feilds: string[] };
      //   vendor: { [key: string]: any; feilds: string[] };
      //   stock: { [key: string]: any; feilds: string[] };
      //   stats: { [key: string]: any; feilds: string[] };
    };
  };
}
