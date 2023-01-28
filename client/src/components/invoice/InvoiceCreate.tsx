import { defineComponent, reactive, ref, withModifiers } from "vue";
import type { newInvoiceT, newInvoiceItemT } from "@/types";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { useProductStore } from "@/stores/productStore";
import { useVendorStore } from "@/stores/vendorStore";
import { useModalStore } from "@/stores/modalStore";
import { UiCheckBox } from "../ui/UiCheckBox";
import { UiButton } from "../ui/UiButton";
import { UiSelect } from "../ui/UiSelect";
import { UiInput } from "../ui/UiInput";
import { storeToRefs } from "pinia";
import UiIcon from "../ui/UiIcon.vue";

export const InvoiceCreate = defineComponent({
  name: "InvoiceCreate",
  components: { UiButton, UiCheckBox, UiIcon, UiInput, UiSelect },
  setup() {
    const isFlash = ref<boolean>(false);
    const IsClicked = ref<boolean>(false);
    const { products } = storeToRefs(useProductStore());
    const { vendors } = storeToRefs(useVendorStore());
    const newInvoice = reactive<newInvoiceT>({
      vendorId: 0,
      invoiceItems: [],
    });
    const InvoiceItems = ref<newInvoiceItemT[]>([
      {
        productId: 0,
        quantity: 0,
      },
    ]);
    const createNewInvoice = () => {
      isFlash.value = true;
      newInvoice.invoiceItems = InvoiceItems.value.filter(
        (item) => item.productId !== 0 && item.quantity !== 0
      );
      if (newInvoice.vendorId && newInvoice.invoiceItems.length !== 0) {
        useInvoiceStore().createOneInvoice(newInvoice);
        useModalStore().updateModal({ key: "show", value: false });
      }
      setTimeout(() => {
        isFlash.value = false;
      }, 1000);
    };
    return () => (
      <div
        onClick={withModifiers(
          () => (IsClicked.value = !IsClicked.value),
          ["self"]
        )}
        class="w-5/6 lg:w-1/2 relative h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]"
      >
        <h1
          onClick={withModifiers(
            () => (IsClicked.value = !IsClicked.value),
            ["self"]
          )}
          class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          Create new Invoice
        </h1>
        <div class="h-full  w-full grid grid-cols-1 gap-2">
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">vendor details</h1>
            <UiSelect
              items={vendors.value.map((vendor) => ({
                name: vendor.name,
                id: vendor.id,
              }))}
              onSelect={(id: number) => (newInvoice.vendorId = id)}
              IsClickedOuside={IsClicked.value}
            >
              Select a vendor
            </UiSelect>
          </div>
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">Invoice details</h1>
            <div
              onClick={withModifiers(
                () => (IsClicked.value = !IsClicked.value),
                ["self"]
              )}
              class="w-full  h-full flex flex-col gap-1"
            >
              <UiButton
                onClick={() =>
                  InvoiceItems.value.push({ productId: 0, quantity: 0 })
                }
              >
                add a product
              </UiButton>
              <div class="w-full grid grid-cols-[1fr_1fr_36px] pb-10 overflow-auto scrollbar-thin scrollbar-thumb-transparent max-h-64 gap-1">
                <div class="flex flex-col gap-2">
                  {InvoiceItems.value.map((item, _index) => (
                    <UiSelect
                      items={products.value.map((product) => ({
                        name: product.name,
                        id: product.id,
                      }))}
                      onSelect={(id: number) => (item.productId = id)}
                      IsClickedOuside={IsClicked.value}
                    >
                      Select a product
                    </UiSelect>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {InvoiceItems.value.map((item, _index) => (
                    <div class="h-full w-full items-center relative">
                      <UiInput
                        IsEmpty={isFlash.value && item.quantity == 0}
                        PlaceHolder="Product quantity"
                        Type="number"
                        OnInputChange={(value) =>
                          (item.quantity = Number(value))
                        }
                      />
                    </div>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {InvoiceItems.value.map((_item, index) => (
                    <div class="flex justify-center bg-gray-100 hover:bg-gray-300 transition-all duration-200  rounded-sm items-center w-full h-full">
                      <UiIcon
                        onClick={() => InvoiceItems.value.splice(index, 1)}
                        name="delete"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => createNewInvoice()}>
            Create a Invoice
          </UiButton>
        </div>
      </div>
    );
  },
});
