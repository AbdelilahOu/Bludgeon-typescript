import { defineComponent, type PropType, ref } from "vue";
import { useModalStore } from "@/stores/modalStore";
import { UiPagination } from "./ui/UiPagination";
import { UiCheckBox } from "./ui/UiCheckBox";
import type { vendorT } from "@/types";
import UiIcon from "./ui/UiIcon.vue";
import { globalTranslate } from "@/utils/globalTranslate";
export const VendorTable = defineComponent({
  name: "VendorTable",
  props: {
    Vendors: {
      type: Array as PropType<vendorT[]>,
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
  components: { UiCheckBox, UiIcon, UiPagination },
  setup(props) {
    const modalStore = useModalStore();
    const checkedVendors = ref<number[]>([]);
    const pagination = ref<number>(0);
    const checkThisUser = (IsInclude: boolean, id: number) => {
      IsInclude
        ? checkedVendors.value.push(id)
        : checkedVendors.value.splice(checkedVendors.value.indexOf(id), 1);
    };
    const toggleThisVendor = (Vendor: vendorT, name: string) => {
      modalStore.updateModal({ key: "show", value: true });
      modalStore.updateModal({ key: "name", value: name });
      modalStore.updateVendorRow(Vendor);
    };

    return () => (
      <div class="flex flex-col w-full">
        <table class="table-auto rounded-sm overflow-hidden w-full">
          <thead class="text-xs h-9 rounded-sm font-semibold uppercase text-[rgba(25,23,17,0.6)] bg-gray-300">
            <tr>
              <th></th>
              {[0, 1, 2, 3, 4].map((index) => (
                <th class="p-2 w-fit ">
                  <div class="font-semibold text-left">
                    {globalTranslate(`Vendors.index.feilds[${index}]`)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            {props.Vendors.filter((c) =>
              JSON.stringify(c).toLocaleLowerCase().includes(props.FilterParam)
            )
              .slice(pagination.value * 15, pagination.value * 15 + 15)
              .map((Vendor) => (
                <tr>
                  <td class="p-2">
                    <span class="h-full w-full grid">
                      <UiCheckBox
                        onCheck={(check) => checkThisUser(check, Vendor.id)}
                      />
                    </span>
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{Vendor.name}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {Vendor.email ?? (
                        <span class="text-red-400">No email</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {Vendor.phone ?? (
                        <span class="text-red-400">No phone</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left whitespace-nowrap overflow-ellipsis">
                      {Vendor.addresse ?? (
                        <span class="text-red-400">No address</span>
                      )}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="flex  w-full justify-start gap-3">
                      <UiIcon
                        onClick={() => toggleThisVendor(Vendor, "VendorDelete")}
                        name={"delete"}
                      />
                      <UiIcon
                        onClick={() => toggleThisVendor(Vendor, "VendorUpdate")}
                        name={"edit"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <UiPagination
            goBack={() => pagination.value--}
            goForward={() => pagination.value++}
            itemsNumber={props.Vendors.length}
            page={pagination.value}
          />
        </div>
      </div>
    );
  },
});
