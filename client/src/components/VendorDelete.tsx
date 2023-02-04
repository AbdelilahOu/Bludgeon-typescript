import { defineComponent, onBeforeUnmount } from "vue";
import { useVendorStore } from "@/stores/vendorStore";
import { useModalStore } from "@/stores/modalStore";
import { UiButton } from "./ui/UiButton";
import { storeToRefs } from "pinia";

export const VendorDelete = defineComponent({
  name: "VendorDelete",
  components: { UiButton },
  setup(props) {
    const modalStore = useModalStore();
    const { vendor } = storeToRefs(modalStore);
    const deleteTheVendor = () => {
      if (vendor.value?.id) {
        useVendorStore().deleteOneVendor(vendor.value?.id);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateVendorRow(null));
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Are you sure you wanna delete the Vendor {vendor.value?.name} ?
        </h1>
        <div class="flex gap-2">
          <UiButton colorTheme="a" onClick={() => deleteTheVendor()}>
            Confirme
          </UiButton>
          <UiButton
            onClick={() =>
              modalStore.updateModal({ key: "show", value: false })
            }
          >
            Cancel
          </UiButton>
        </div>
      </div>
    );
  },
});
