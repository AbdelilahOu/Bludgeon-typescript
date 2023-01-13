import { defineComponent, type PropType } from "vue";
import { UiCheckBox } from "../ui/UiCheckBox";
import type { product } from "@/types";

export const ProductTable = defineComponent({
  name: "ProductTable",
  props: {
    Products: {
      type: Array as PropType<product[]>,
      required: true,
    },
    sortBy: {
      type: Function as PropType<(by: string) => void>,
    },
  },
  setup(props) {
    const feilds: string[] = ["product name", "price", "unite", "action"];
    return () => (
      <table class="table-auto rounded-sm overflow-hidden w-full">
        <thead class="text-xs rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
          <tr>
            <th></th>
            {feilds.map((feild) => (
              <th class="p-2">
                <div class="font-semibold text-left">{feild}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody class="text-sm divide-y divide-gray-100">
          {props.Products.map((product) => (
            <tr>
              <td class="p-2">
                <span class="h-full w-full grid">
                  <UiCheckBox
                    onCheck={(check) =>
                      console.log(
                        product.name,
                        check ? "is checked" : "is unchecked"
                      )
                    }
                  />
                </span>
              </td>
              <td class="p-2">
                <div class="font-medium text-gray-800">{product.name}</div>
              </td>
              <td class="p-2">
                <div class="text-left">{product.price}</div>
              </td>
              <td class="p-2">
                <div class="text-left">{product.unite}</div>
              </td>

              <td class="p-2">
                <div class="flex justify-start w-full ">
                  <button>
                    <svg
                      class="w-8 h-8 text-red-400 hover:text-red-300  rounded-full hover:bg-gray-100 p-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {props.Products?.length == 0 ? (
          <tfoot>
            <tr>No products</tr>
          </tfoot>
        ) : (
          ""
        )}
      </table>
    );
  },
});
