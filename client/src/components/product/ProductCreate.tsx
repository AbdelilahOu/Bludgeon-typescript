<<<<<<< HEAD
import { defineComponent, reactive, ref, type PropType } from "vue";
import { useProductStore } from "@/stores/productStore";
import type { newProductT } from "@/types";
import { UiButton } from "../ui/UiButton";
import { UiInput } from "../ui/UiInput";
import { useModalStore } from "@/stores/modalStore";

export const ProductCreate = defineComponent({
  name: "ProductCreate",
  components: { UiButton, UiInput },
  setup() {
    const isFlash = ref<boolean>(false);
    const newProduct = reactive<newProductT>({
      name: "a",
      price: 0,
      quantity: 0,
      description: "aaaaaaaaa",
    });
    const createNewProduct = () => {
      isFlash.value = true;
      if (newProduct.name !== "") {
        useProductStore().createOneProduct(newProduct);
        useModalStore().updateModal({ key: "show", value: false });
      }
      setTimeout(() => {
        isFlash.value = false;
      }, 1000);
    };
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Create new Product
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiInput
            IsEmpty={isFlash.value && newProduct["name"] == ""}
            OnInputChange={(value) =>
              (newProduct["name"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Name"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["price"] == 0}
            OnInputChange={(value) => (newProduct["price"] = Number(value))}
            Type="Number"
            PlaceHolder="Price in DH"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["quantity"] == 0}
            OnInputChange={(value) => (newProduct["quantity"] = Number(value))}
            Type="Number"
            PlaceHolder="Quantity in stock"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["description"] == ""}
            OnInputChange={(value) =>
              (newProduct["description"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="textarea"
            PlaceHolder="Description"
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => createNewProduct()}>
            Create a product
          </UiButton>
        </div>
      </div>
    );
  },
});
=======
import { defineComponent, reactive, ref, type PropType } from "vue";
import { useProductStore } from "@/stores/productStore";
import type { newProductT } from "@/types";
import { UiButton } from "../ui/UiButton";
import { UiInput } from "../ui/UiInput";
import { useModalStore } from "@/stores/modalStore";

export const ProductCreate = defineComponent({
  name: "ProductCreate",
  components: { UiButton, UiInput },
  setup() {
    const isFlash = ref<boolean>(false);
    const newProduct = reactive<newProductT>({
      name: "a",
      price: 0,
      quantity: 0,
      description: "aaaaaaaaa",
    });
    const createNewProduct = () => {
      isFlash.value = true;
      if (newProduct.name !== "") {
        useProductStore().createOneProduct(newProduct);
        useModalStore().updateModal({ key: "show", value: false });
      }
      setTimeout(() => {
        isFlash.value = false;
      }, 1000);
    };
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Create new Product
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiInput
            IsEmpty={isFlash.value && newProduct["name"] == ""}
            OnInputChange={(value) =>
              (newProduct["name"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Name"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["price"] == 0}
            OnInputChange={(value) => (newProduct["price"] = Number(value))}
            Type="Number"
            PlaceHolder="Price in DH"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["quantity"] == 0}
            OnInputChange={(value) => (newProduct["quantity"] = Number(value))}
            Type="Number"
            PlaceHolder="Quantity in stock"
          />
          <UiInput
            IsEmpty={isFlash.value && newProduct["description"] == ""}
            OnInputChange={(value) =>
              (newProduct["description"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="textarea"
            PlaceHolder="Description"
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => createNewProduct()}>
            Create a product
          </UiButton>
        </div>
      </div>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
