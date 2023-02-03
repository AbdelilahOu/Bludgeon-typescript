import { defineComponent, reactive, onBeforeUnmount } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useModalStore } from "@/stores/modalStore";
import { UiUpdateInput } from "../ui/UiUpdateInput";
import { UiButton } from "../ui/UiButton";
import type { updateProductT } from "@/types";
import { storeToRefs } from "pinia";

export const ProductUpdate = defineComponent({
  name: "ProductUpdate",
  components: { UiButton, UiUpdateInput },
  setup() {
    const modalStore = useModalStore();
    const { product: ProductRow } = storeToRefs(modalStore);
    const Product = {
      id: undefined,
      name: undefined,
      price: undefined,
      quantity: undefined,
      description: undefined,
    };
    const updateProduct = reactive<updateProductT>({
      ...(ProductRow.value ? ProductRow.value : Product),
      quantity: 0,
    });
    const updateTheProduct = () => {
      if (updateProduct.id) {
        useProductStore().updateOneProduct(updateProduct.id, updateProduct);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateProductRow(null));

    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Update Product
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiUpdateInput
            Value={ProductRow.value?.name}
            OnInputChange={(value) =>
              (updateProduct["name"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Name"
          />
          <UiUpdateInput
            Value={ProductRow.value?.price}
            OnInputChange={(value) => (updateProduct["price"] = Number(value))}
            Type="number"
            PlaceHolder="Price"
          />
          <UiUpdateInput
            // Value={ProductRow.value?.stock}
            OnInputChange={(value) =>
              (updateProduct["quantity"] = Number(value))
            }
            Type="text"
            PlaceHolder="Add Stock"
          />
          <UiUpdateInput
            Value={ProductRow.value?.description}
            OnInputChange={(value) =>
              (updateProduct["description"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Address"
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => updateTheProduct()}>
            Update {updateProduct.name}
          </UiButton>
        </div>
      </div>
    );
  },
});
