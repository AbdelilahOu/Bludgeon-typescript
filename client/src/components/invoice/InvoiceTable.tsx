import type { invoiceT } from "@/types";
import { defineComponent, ref, type PropType } from "vue";
import { UiCheckBox } from "../ui/UiCheckBox";
import UiIcon from "../ui/UiIcon.vue";
import { UiPagination } from "../ui/UiPagination";

export const InvoiceTable = defineComponent({
  props: {
    Invoices: {
      type: Array as PropType<invoiceT[]>,
      required: true,
    },
    sortBy: {
      type: Function as PropType<(by: string) => void>,
    },
    FilterParam: {
      type: String,
      required: true,
      default: "",
    },
  },
  components: { UiIcon, UiCheckBox, UiPagination },
  setup(props) {
    const checkThisInvoice = (a: any, b: number) => "";

    const pagination = ref(0);

    const feilds: string[] = [
      "Invoice id",
      "vendor id",
      "items",
      "status",
      "date",
      "action",
    ];

    const formatDate = (theDate: string) => {
      return new Date(theDate).toLocaleDateString("fr-fr", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };
    const toggleThisInvoice = (a: any, b: string) => "";

    return () => (
      <div class="flex flex-col w-full h-full">
        <table class="table-auto rounded-sm overflow-hidden w-full">
          <thead class="text-xs h-9 rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
            <tr>
              <th></th>
              {feilds.map((feild) => (
                <th class="p-2 ">
                  <div class="font-semibold text-left">{feild}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            {props.Invoices.filter((c) =>
              JSON.stringify(c).toLocaleLowerCase().includes(props.FilterParam)
            )
              .slice(pagination.value * 15, pagination.value * 15 + 15)
              .map((Invoice) => (
                <tr>
                  <td class="p-2">
                    <span class="h-full w-full grid">
                      <UiCheckBox
                        onCheck={(check) => checkThisInvoice(check, Invoice.id)}
                      />
                    </span>
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{Invoice.id}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {Invoice.clientId ?? (
                        <span class="text-red-400">No email</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {Invoice.InvoiceItems?.length ? (
                        <span>
                          {Invoice.invoiceItems?.length}{" "}
                          {Invoice.invoiceItems?.length == 1
                            ? " Product"
                            : " Products"}
                        </span>
                      ) : (
                        <span class="text-red-400">No products</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium uppercase whitespace-nowrap overflow-ellipsis">
                      {Invoice.status ? (
                        <span
                          class={
                            Invoice.status == "pending"
                              ? "bg-yellow-300 px-2 py-[1px] rounded-full"
                              : Invoice.status == "Delivered"
                              ? "bg-green-300 px-2 py-[1px] rounded-full"
                              : "bg-red-300 px-2 py-[1px] rounded-full"
                          }
                        >
                          {Invoice.status}
                        </span>
                      ) : (
                        <span class="text-red-400">No status</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {formatDate(Invoice.createdAt) ?? (
                        <span class="text-red-400">No date</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="flex  justify-start gap-3">
                      <UiIcon
                        onClick={() =>
                          toggleThisInvoice(Invoice, "InvoiceDelete")
                        }
                        name={"delete"}
                      />
                      <UiIcon
                        onClick={() =>
                          toggleThisInvoice(Invoice, "InvoiceUpdate")
                        }
                        name={"edit"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          {props.Invoices?.length == 0 ? (
            <h1 class="font-semibold text-lg text-center pt-3 uppercase">
              No Invoices
            </h1>
          ) : (
            <UiPagination
              goBack={() => pagination.value--}
              goForward={() => pagination.value++}
              itemsNumber={props.Invoices.length}
              page={pagination.value}
            />
          )}
        </div>
      </div>
    );
  },
});
