import { defineComponent, type PropType } from "vue";
import { UiInput } from "../ui/UiInput";
import type { client } from "@/types";

export const ClientTable = defineComponent({
  name: "ClientTable",
  props: {
    Clients: {
      type: Array as PropType<client[]>,
      required: true,
    },
    sortBy: {
      type: Function as PropType<(by: string) => void>,
    },
  },
  setup(props) {
    const feilds: string[] = [
      "client name",
      "phone number",
      "adresse",
      "action",
    ];
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
          {props.Clients.map((client) => (
            <tr>
              <td class="p-2">
                <span class="h-full w-full grid">
                  <UiInput
                    OnInputChange={(value) => console.log(value)}
                    Disable={false}
                    Type="checkbox"
                  />
                </span>
              </td>
              <td class="p-2">
                <div class="font-medium text-gray-800">{client.name}</div>
              </td>
              <td class="p-2">
                <div class="text-left">{client.phone}</div>
              </td>
              <td class="p-2">
                <div class="text-left font-medium text-green-500">
                  {client.adresse}
                </div>
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
        {props.Clients?.length == 0 ? (
          <tfoot>
            <tr>No clients</tr>
          </tfoot>
        ) : (
          ""
        )}
      </table>
    );
  },
});
