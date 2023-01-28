import { defineComponent, reactive, onBeforeUnmount } from "vue";
import { useVendorStore } from "@/stores/vendorStore";
import { useModalStore } from "@/stores/modalStore";
import { UiUpdateInput } from "../ui/UiUpdateInput";
import type { updateVendorT } from "@/types";
import { UiButton } from "../ui/UiButton";
import { storeToRefs } from "pinia";

export const VendorUpdate = defineComponent({
  name: "VendorUpdate",
  components: { UiButton, UiUpdateInput },
  setup() {
    const modalStore = useModalStore();
    const { vendor: VendorRow } = storeToRefs(modalStore);
    const Vendor = {
      id: undefined,
      name: undefined,
      email: undefined,
      phone: undefined,
      addresse: undefined,
    };
    const updateVendor = reactive<updateVendorT>(
      VendorRow.value ? VendorRow.value : Vendor
    );
    const updateTheVendor = () => {
      if (updateVendor?.id) {
        useVendorStore().updateOneVendor(updateVendor.id, updateVendor);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateVendorRow(null));

    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Update Vendor
        </h1>
        <div class="h-full w-full flex flex-col gap-2">
          <UiUpdateInput
            Value={VendorRow.value?.name}
            OnInputChange={(value) =>
              (updateVendor["name"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Name"
          />
          <UiUpdateInput
            Value={VendorRow.value?.email}
            OnInputChange={(value) =>
              (updateVendor["email"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Email"
          />
          <UiUpdateInput
            Value={VendorRow.value?.phone}
            OnInputChange={(value) =>
              (updateVendor["phone"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Phone"
          />
          <UiUpdateInput
            Value={VendorRow.value?.addresse}
            OnInputChange={(value) =>
              (updateVendor["addresse"] =
                typeof value == "string" ? value : JSON.stringify(value))
            }
            Type="text"
            PlaceHolder="Address"
          />
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => updateTheVendor()}>
            Update {updateVendor.name}
          </UiButton>
        </div>
      </div>
    );
  },
});
