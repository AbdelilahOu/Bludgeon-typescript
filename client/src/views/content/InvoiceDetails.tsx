import { UiButton } from "@/components/ui/UiButton";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { storeToRefs } from "pinia";
import { defineComponent, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export const InvoiceDetails = defineComponent({
  name: "InvoiceDetails",
  setup() {
    const id = useRoute().params.id;
    const InvoiceStore = useInvoiceStore();
    const { invoice } = storeToRefs(InvoiceStore);
    const feilds: string[] = [
      "product name",
      "product id",
      "quantity",
      "price",
      "total",
    ];
    onBeforeMount(() => InvoiceStore.getOneInvoice(Number(id)));

    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full text-black print:pr-12">
          <div class="w-full h-full grid-rows-[230px_1fr] grid grid-cols-2">
            <div class="w-full h-full flex-col flex">
              <h1 class="uppercase font-semibold mb-1">invoice DETAILS</h1>
              <table class="table-auto rounded-sm overflow-hidden w-full">
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid">id</span>
                    </td>
                    <td class="p-2 ">
                      <span class="h-full w-full grid">
                        {invoice.value?.id}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid">date</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {new Date(
                          invoice.value?.createdAt ?? new Date()
                        ).toLocaleDateString("fr-fr", {
                          month: "2-digit",
                          year: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="w-full h-full flex flex-col">
              <h1 class="uppercase font-semibold mb-1">Client details</h1>
              <table class="table-auto rounded-sm overflow-hidden w-full">
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid ">ID</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {invoice.value?.vendor.id}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid ">NAME</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {invoice.value?.vendor.name}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid ">PHONE</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {invoice.value?.vendor.phone}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid ">EMAIL</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {invoice.value?.vendor.email}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 bg-gray-300 font-semibold uppercase text-[rgba(25,23,17,0.6)]">
                      <span class="h-full w-full grid ">EMAIL</span>
                    </td>
                    <td class="p-2">
                      <span class="h-full w-full grid">
                        {invoice.value?.vendor.addresse}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="w-full h-full col-span-2 row-span-2 text-black">
              <h1 class="uppercase font-semibold mb-1">invoiceitems DETAILS</h1>
              <table class="table-auto rounded-sm overflow-hidden w-full">
                <thead class="text-xs h-9 rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
                  <tr>
                    <th></th>
                    {feilds.map((feild) => (
                      <th class="p-2">
                        <div class="font-semibold text-left">{feild}</div>
                      </th>
                    ))}
                    <th></th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  {invoice.value?.invoiceItems.map((item) => (
                    <tr>
                      <td class="p-2">
                        <span class="h-full w-full grid"></span>
                      </td>
                      <td class="p-2">
                        <span class="h-full w-full grid">
                          {item.product.name}
                        </span>
                      </td>
                      <td class="p-2">
                        <div class="font-medium text-gray-800">
                          {item.productId}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left"> {item.quantity} </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">
                          {" "}
                          {item.product.price.toFixed(2)}{" "}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="flex  justify-start gap-3">
                          {" "}
                          {(item.product.price * item.quantity).toFixed(2)}{" "}
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="flex  justify-start gap-3"></div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="p-2 font-semibold">
                      {invoice.value?.invoiceItems
                        .reduce(
                          (acc, curr) =>
                            (acc += curr.quantity * curr.product.price),
                          0
                        )
                        .toFixed(2)}{" "}
                      DH
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="w-full flex items-center justify-center">
                <div class="w-1/3">
                  <UiButton onClick={() => window.print()} colorTheme="A">
                    PRINT
                  </UiButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  },
});
