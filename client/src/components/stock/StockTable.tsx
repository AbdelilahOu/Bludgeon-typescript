<<<<<<< HEAD
import { defineComponent, ref, type PropType } from "vue";
import type { stockMvmT } from "@/types";
import { UiPagination } from "../ui/UiPagination";
import { RouterLink } from "vue-router";
export const StockTable = defineComponent({
  name: "StockTable",
  props: {
    Stock: {
      type: Array as PropType<stockMvmT[]>,
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
  components: { UiPagination },
  setup(props) {
    const pagination = ref<number>(0);
    const feilds: string[] = [
      "id",
      "product name",
      "product price",
      "quantity",
      "command id",
      "invoice id",
      "date",
      "",
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
    return () => (
      <div class="flex flex-col w-full h-fit">
        <table class="table-auto rounded-sm overflow-hidden w-full">
          <thead class="text-xs h-9 rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
            <tr>
              {feilds.map((feild) => (
                <th class="p-2">
                  <div class="font-semibold text-left">{feild}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            {props.Stock.filter((c) =>
              JSON.stringify(c).toLocaleLowerCase().includes(props.FilterParam)
            )
              .slice(pagination.value * 15, pagination.value * 15 + 15)
              .map((mvm) => (
                <tr>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{mvm.id}</div>
                  </td>

                  <td class="p-2">
                    <div class="text-left font-medium">{mvm.product.name}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{mvm.product.price.toFixed(2)}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{Math.abs(mvm.quantity)}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium">
                      {mvm.commandItem?.commandId ? (
                        <RouterLink
                          to={{
                            name: "CommandDetails",
                            params: { id: mvm.commandItem?.commandId },
                          }}
                        >
                          {mvm.commandItem?.commandId}
                        </RouterLink>
                      ) : (
                        "-------"
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium">
                      {mvm.invoiceItem?.invoiceId ? (
                        <RouterLink
                          to={{
                            name: "InvoiceDetails",
                            params: { id: mvm.invoiceItem?.invoiceId },
                          }}
                        >
                          {mvm.invoiceItem?.invoiceId}
                        </RouterLink>
                      ) : (
                        "-------"
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{formatDate(mvm.date)}</div>
                  </td>
                  <td class="p-2">
                    <div class="flex  justify-start gap-3 font-bold text-xl h-8 p-1">
                      {mvm.model == "IN" ? "📈" : "📉"}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          {props.Stock?.length == 0 ? (
            <h1 class="font-semibold text-lg text-center pt-3 uppercase">
              No stock
            </h1>
          ) : (
            <UiPagination
              goBack={() => pagination.value--}
              goForward={() => pagination.value++}
              itemsNumber={props.Stock.length}
              page={pagination.value}
            />
          )}
        </div>
      </div>
    );
  },
});
=======
import { defineComponent, ref, type PropType } from "vue";
import type { stockMvmT } from "@/types";
import { UiPagination } from "../ui/UiPagination";
export const StockTable = defineComponent({
  name: "StockTable",
  props: {
    Stock: {
      type: Array as PropType<stockMvmT[]>,
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
  components: { UiPagination },
  setup(props) {
    const pagination = ref<number>(0);
    const feilds: string[] = [
      "id",
      "product name",
      "product price",
      "quantity",
      "command id",
      "invoice id",
      "date",
      "",
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
    return () => (
      <div class="flex flex-col w-full h-fit">
        <table class="table-auto rounded-sm overflow-hidden w-full">
          <thead class="text-xs h-9 rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
            <tr>
              {feilds.map((feild) => (
                <th class="p-2">
                  <div class="font-semibold text-left">{feild}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            {props.Stock.filter((c) =>
              JSON.stringify(c).toLocaleLowerCase().includes(props.FilterParam)
            )
              .slice(pagination.value * 15, pagination.value * 15 + 15)
              .map((mvm) => (
                <tr>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{mvm.id}</div>
                  </td>

                  <td class="p-2">
                    <div class="text-left font-medium">{mvm.product.name}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{mvm.product.price.toFixed(2)}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{Math.abs(mvm.quantity)}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium">
                      {mvm.commandItem?.commandId ?? "-------"}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium">
                      {mvm.invoiceItem?.invoiceId ?? "-------"}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">{formatDate(mvm.date)}</div>
                  </td>
                  <td class="p-2">
                    <div class="flex  justify-start gap-3 font-bold text-xl h-8 p-1">
                      {mvm.model == "IN" ? "📈" : "📉"}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          {props.Stock?.length == 0 ? (
            <h1 class="font-semibold text-lg text-center pt-3 uppercase">
              No stock
            </h1>
          ) : (
            <UiPagination
              goBack={() => pagination.value--}
              goForward={() => pagination.value++}
              itemsNumber={props.Stock.length}
              page={pagination.value}
            />
          )}
        </div>
      </div>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
