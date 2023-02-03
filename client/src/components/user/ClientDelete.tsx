import { defineComponent, onBeforeUnmount, type PropType } from "vue";
import { useClientStore } from "@/stores/clientStore";
import { useModalStore } from "@/stores/modalStore";
import { storeToRefs } from "pinia";
import { UiButton } from "../ui/UiButton";

export const ClientDelete = defineComponent({
  name: "ClientDelete",
  components: { UiButton },
  setup() {
    const modalStore = useModalStore();
    const { client } = storeToRefs(modalStore);
    const deleteTheClient = () => {
      if (client.value?.id) {
        useClientStore().deleteOneClient(client.value?.id);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateClientRow(null));
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Are you sure you wanna delete the client {client.value?.name} ?
        </h1>
        <div class="flex gap-2">
          <UiButton colorTheme="a" onClick={() => deleteTheClient()}>
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
