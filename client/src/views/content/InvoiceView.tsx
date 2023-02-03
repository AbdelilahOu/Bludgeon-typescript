import { defineComponent, onBeforeMount, ref, Transition } from "vue";
import { InvoiceTable } from "@/components/invoice/InvoiceTable";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { UiButton } from "@/components/ui/UiButton";
import { useModalStore } from "@/stores/modalStore";
import { UiInput } from "@/components/ui/UiInput";
import UiIcon from "@/components/ui/UiIcon.vue";
import { storeToRefs } from "pinia";

export const InvoiceView = defineComponent({
  name: "Invoices",
  components: {
    InvoiceTable,
    UiButton,
    UiInput,
    UiIcon,
  },
  setup() {
    //
    const modalStore = useModalStore();
    const InvoiceStore = useInvoiceStore();
    const { invoices } = storeToRefs(InvoiceStore);
    //
    const searchQuery = ref<string>("");
    //
    onBeforeMount(() => {
      if (!invoices.value.length) InvoiceStore.getAllInvoices();
    });
    //
    const updateModal = (name: string) => {
      modalStore.updateModal({ key: "show", value: true });
      modalStore.updateModal({ key: "name", value: name });
    };
    //
    const sortInvoicesBy = (by: string) => {};

    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full flex flex-col items-start justify-start">
          <Transition appear>
            <div class="flex justify-between w-full gap-9 my-1">
              <div class="w-1/3">
                <UiInput
                  IsEmpty={false}
                  OnInputChange={(value) =>
                    (searchQuery.value =
                      typeof value !== "string"
                        ? JSON.stringify(value).toLocaleLowerCase()
                        : value.toLocaleLowerCase())
                  }
                  Type="text"
                  PlaceHolder="Search"
                >
                  <UiIcon
                    class=" fill-gray-400 cursor-default hover:bg-white"
                    name="search"
                  />
                </UiInput>
              </div>
              <div class="w-1/4 flex gap-2">
                <UiButton
                  colorTheme="a"
                  onClick={() => updateModal("InvoiceCreate")}
                >
                  <UiIcon
                    class=" fill-gray-900 cursor-default hover:bg-transparent"
                    name="add"
                  />{" "}
                  Add new Invoice{" "}
                </UiButton>
              </div>
            </div>
          </Transition>
          <Transition appear>
            <InvoiceTable
              FilterParam={searchQuery.value}
              sortBy={(by: string) => sortInvoicesBy(by)}
              Invoices={invoices.value}
            />
          </Transition>
        </div>
      </main>
    );
  },
});
