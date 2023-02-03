<<<<<<< HEAD
import { defineComponent, reactive, ref, withModifiers } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useModalStore } from "@/stores/modalStore";
import { useStockStore } from "@/stores/stockStore";
import { UiButton } from "../ui/UiButton";
import { UiSelect } from "../ui/UiSelect";
import { UiInput } from "../ui/UiInput";
import { storeToRefs } from "pinia";

export const StockCreate = defineComponent({
  name: "StockCreate",
  components: { UiButton, UiInput, UiSelect },
  setup() {
    const { products } = storeToRefs(useProductStore());
    const IsClicked = ref<boolean>(false);
    const stockMvm = reactive({
      productId: 0,
      quantity: 0,
      model: "IN",
    });
    const createNewStock = () => {
      if (stockMvm.productId !== 0 && stockMvm.quantity !== 0) {
        useStockStore().createStockMouvement(stockMvm);
        useModalStore().updateModal({ key: "show", value: false });
      }
    };
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1
          onClick={withModifiers(
            () => (IsClicked.value = !IsClicked.value),
            ["self"]
          )}
          class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          add more items
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiSelect
            items={products.value.map((product) => ({
              name: product.name,
              id: product.id,
            }))}
            onSelect={(id: number) => (stockMvm.productId = id)}
            IsClickedOuside={IsClicked.value}
          >
            Select a product
          </UiSelect>
          <UiInput
            onClick={withModifiers(
              () => (IsClicked.value = !IsClicked.value),
              ["self"]
            )}
            Type="number"
            PlaceHolder="Quantity"
            IsEmpty={false}
            OnInputChange={(input) => (stockMvm.quantity = Number(input))}
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => createNewStock()}>
            Add to stock
          </UiButton>
        </div>
      </div>
    );
  },
});
=======
import { defineComponent, reactive, ref, withModifiers } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useModalStore } from "@/stores/modalStore";
import { useStockStore } from "@/stores/stockStore";
import { UiButton } from "../ui/UiButton";
import { UiSelect } from "../ui/UiSelect";
import { UiInput } from "../ui/UiInput";
import { storeToRefs } from "pinia";

export const StockCreate = defineComponent({
  name: "StockCreate",
  components: { UiButton, UiInput, UiSelect },
  setup() {
    const { products } = storeToRefs(useProductStore());
    const IsClicked = ref<boolean>(false);
    const stockMvm = reactive({
      productId: 0,
      quantity: 0,
      model: "IN",
    });
    const createNewStock = () => {
      if (stockMvm.productId !== 0 && stockMvm.quantity !== 0) {
        useStockStore().createStockMouvement(stockMvm);
        useModalStore().updateModal({ key: "show", value: false });
      }
    };
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1
          onClick={withModifiers(
            () => (IsClicked.value = !IsClicked.value),
            ["self"]
          )}
          class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          Create new Product
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiSelect
            items={products.value.map((product) => ({
              name: product.name,
              id: product.id,
            }))}
            onSelect={(id: number) => (stockMvm.productId = id)}
            IsClickedOuside={IsClicked.value}
          >
            Select a product
          </UiSelect>
          <UiInput
            onClick={withModifiers(
              () => (IsClicked.value = !IsClicked.value),
              ["self"]
            )}
            Type="number"
            PlaceHolder="Quantity"
            IsEmpty={false}
            OnInputChange={(input) => (stockMvm.quantity = Number(input))}
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => createNewStock()}>
            Add to stock
          </UiButton>
        </div>
      </div>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834