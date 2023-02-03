<<<<<<< HEAD
import {
  defineComponent,
  reactive,
  onBeforeUnmount,
  ref,
  withModifiers,
} from "vue";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { useModalStore } from "@/stores/modalStore";
import { UiUpdateInput } from "../ui/UiUpdateInput";
import { UiButton } from "../ui/UiButton";
import type { updateInvoiceT } from "@/types";
import { storeToRefs } from "pinia";
import { UiUpdateSelect } from "../ui/UiUpdateSelect";
import { useVendorStore } from "@/stores/vendorStore";
import { UiCheckBox } from "../ui/UiCheckBox";
import { useProductStore } from "@/stores/productStore";
import UiIcon from "../ui/UiIcon.vue";

export const InvoiceUpdate = defineComponent({
  name: "InvoiceUpdate",
  components: { UiButton, UiUpdateInput, UiIcon, UiUpdateSelect, UiCheckBox },
  setup() {
    //
    const productStore = useProductStore();
    const vendorStore = useVendorStore();
    const modalStore = useModalStore();
    //
    const { invoice: invoiceRow } = storeToRefs(modalStore);

    const { products } = storeToRefs(productStore);
    const { vendors } = storeToRefs(vendorStore);
    const IsClicked = ref<boolean>(false);
    //
    const invoice: updateInvoiceT = {
      id: undefined,
      total: undefined,
      vendorId: undefined,
      invoiceItems: [],
    };
    //
    const updateInvoice = reactive<updateInvoiceT>(
      invoiceRow.value ? invoiceRow.value : invoice
    );
    //
    const updateTheInvoice = () => {
      if (updateInvoice.id) {
        useInvoiceStore().updateOneInvoice(updateInvoice.id, updateInvoice);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateInvoiceRow(null));

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
          class="font-semibold  text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          UPDATE invoice N° {updateInvoice.id}
        </h1>
        <div class="h-full  w-full grid grid-cols-1 gap-2">
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">vendor details</h1>
            <UiUpdateSelect
              Value={
                vendors.value.find((cli) => updateInvoice.vendorId === cli.id)
                  ?.name ?? ""
              }
              items={vendors.value.map((vendor) => ({
                name: vendor.name,
                id: vendor.id,
              }))}
              onSelect={(id: number) => (updateInvoice.vendorId = id)}
              IsClickedOuside={IsClicked.value}
            >
              Select a vendor
            </UiUpdateSelect>
          </div>
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">invoice details</h1>
            <div
              onClick={withModifiers(
                () => (IsClicked.value = !IsClicked.value),
                ["self"]
              )}
              class="w-full  h-full flex flex-col gap-1"
            >
              <UiButton
                onClick={() =>
                  updateInvoice.invoiceItems?.push({
                    productId: 0,
                    quantity: 0,
                  })
                }
              >
                add a product
              </UiButton>
              <div class="w-full grid grid-cols-[1fr_1fr_36px] pb-10 overflow-auto scrollbar-thin scrollbar-thumb-transparent max-h-64 gap-1">
                <div class="flex flex-col gap-2">
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <UiUpdateSelect
                      Value={
                        products.value.find((pro) => pro.id == item.productId)
                          ?.name ?? ""
                      }
                      items={products.value.map((product) => ({
                        name: product.name,
                        id: product.id,
                      }))}
                      onSelect={(id: number) => (item.productId = id)}
                      IsClickedOuside={IsClicked.value}
                    >
                      Select a product
                    </UiUpdateSelect>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <div class="h-full w-full items-center relative">
                      <UiUpdateInput
                        Value={item.quantity}
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
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <div class="flex justify-center bg-gray-100 hover:bg-gray-300 transition-all duration-200  rounded-sm items-center w-full h-full">
                      <UiIcon
                        onClick={() => {
                          updateInvoice.invoiceItems?.splice(index, 1);
                          if (item.id)
                            useInvoiceStore().deleteOneInvoiceItem(item.id);
                        }}
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
          <UiButton colorTheme="a" onClick={() => updateTheInvoice()}>
            Update invoice
          </UiButton>
        </div>
      </div>
    );
  },
});
=======
import {
  defineComponent,
  reactive,
  onBeforeUnmount,
  ref,
  withModifiers,
} from "vue";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { useModalStore } from "@/stores/modalStore";
import { UiUpdateInput } from "../ui/UiUpdateInput";
import { UiButton } from "../ui/UiButton";
import type { updateInvoiceT } from "@/types";
import { storeToRefs } from "pinia";
import { UiUpdateSelect } from "../ui/UiUpdateSelect";
import { useVendorStore } from "@/stores/vendorStore";
import { UiCheckBox } from "../ui/UiCheckBox";
import { useProductStore } from "@/stores/productStore";
import UiIcon from "../ui/UiIcon.vue";

export const InvoiceUpdate = defineComponent({
  name: "InvoiceUpdate",
  components: { UiButton, UiUpdateInput, UiIcon, UiUpdateSelect, UiCheckBox },
  setup() {
    //
    const productStore = useProductStore();
    const vendorStore = useVendorStore();
    const modalStore = useModalStore();
    //
    const { invoice: invoiceRow } = storeToRefs(modalStore);

    const { products } = storeToRefs(productStore);
    const { vendors } = storeToRefs(vendorStore);
    const IsClicked = ref<boolean>(false);
    //
    const invoice: updateInvoiceT = {
      id: undefined,
      total: undefined,
      vendorId: undefined,
      invoiceItems: [],
    };
    //
    const updateInvoice = reactive<updateInvoiceT>(
      invoiceRow.value ? invoiceRow.value : invoice
    );
    //
    const updateTheInvoice = () => {
      if (updateInvoice.id) {
        useInvoiceStore().updateOneInvoice(updateInvoice.id, updateInvoice);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateInvoiceRow(null));

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
          class="font-semibold  text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          UPDATE invoice N° {updateInvoice.id}
        </h1>
        <div class="h-full  w-full grid grid-cols-1 gap-2">
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">vendor details</h1>
            <UiUpdateSelect
              Value={
                vendors.value.find((cli) => updateInvoice.vendorId === cli.id)
                  ?.name ?? ""
              }
              items={vendors.value.map((vendor) => ({
                name: vendor.name,
                id: vendor.id,
              }))}
              onSelect={(id: number) => (updateInvoice.vendorId = id)}
              IsClickedOuside={IsClicked.value}
            >
              Select a vendor
            </UiUpdateSelect>
          </div>
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">invoice details</h1>
            <div
              onClick={withModifiers(
                () => (IsClicked.value = !IsClicked.value),
                ["self"]
              )}
              class="w-full  h-full flex flex-col gap-1"
            >
              <UiButton
                onClick={() =>
                  updateInvoice.invoiceItems?.push({
                    productId: 0,
                    quantity: 0,
                  })
                }
              >
                add a product
              </UiButton>
              <div class="w-full grid grid-cols-[1fr_1fr_36px] pb-10 overflow-auto scrollbar-thin scrollbar-thumb-transparent max-h-64 gap-1">
                <div class="flex flex-col gap-2">
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <UiUpdateSelect
                      Value={
                        products.value.find((pro) => pro.id == item.productId)
                          ?.name ?? ""
                      }
                      items={products.value.map((product) => ({
                        name: product.name,
                        id: product.id,
                      }))}
                      onSelect={(id: number) => (item.productId = id)}
                      IsClickedOuside={IsClicked.value}
                    >
                      Select a product
                    </UiUpdateSelect>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <div class="h-full w-full items-center relative">
                      <UiUpdateInput
                        Value={item.quantity}
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
                  {updateInvoice.invoiceItems?.map((item, index) => (
                    <div class="flex justify-center bg-gray-100 hover:bg-gray-300 transition-all duration-200  rounded-sm items-center w-full h-full">
                      <UiIcon
                        onClick={() => {
                          updateInvoice.invoiceItems?.splice(index, 1);
                          if (item.id)
                            useInvoiceStore().deleteOneInvoiceItem(item.id);
                        }}
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
          <UiButton colorTheme="a" onClick={() => updateTheInvoice()}>
            Update invoice
          </UiButton>
        </div>
      </div>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
