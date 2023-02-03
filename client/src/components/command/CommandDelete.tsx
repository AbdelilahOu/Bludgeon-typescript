<<<<<<< HEAD
import { defineComponent, onBeforeUnmount } from "vue";
import { useCommandStore } from "@/stores/commandStore";
import { useModalStore } from "@/stores/modalStore";
import { storeToRefs } from "pinia";
import { UiButton } from "../ui/UiButton";

export const CommandDelete = defineComponent({
  name: "CommandDelete",
  components: { UiButton },
  setup() {
    //
    const modalStore = useModalStore();
    const { command } = storeToRefs(modalStore);
    //
    const deleteTheCommand = () => {
      if (command.value?.id) {
        useCommandStore().deleteOneCommand(command.value?.id);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    //
    onBeforeUnmount(() => modalStore.updateCommandRow(null));
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Are you sure you wanna delete the Command n° {command.value?.id} ?
        </h1>
        <div class="flex gap-2">
          <UiButton colorTheme="a" onClick={() => deleteTheCommand()}>
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
=======
import { defineComponent, onBeforeUnmount } from "vue";
import { useCommandStore } from "@/stores/commandStore";
import { useModalStore } from "@/stores/modalStore";
import { storeToRefs } from "pinia";
import { UiButton } from "../ui/UiButton";

export const CommandDelete = defineComponent({
  name: "CommandDelete",
  components: { UiButton },
  setup() {
    //
    const modalStore = useModalStore();
    const { command } = storeToRefs(modalStore);
    //
    const deleteTheCommand = () => {
      if (command.value?.id) {
        useCommandStore().deleteOneCommand(command.value?.id);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    //
    onBeforeUnmount(() => modalStore.updateCommandRow(null));
    return () => (
      <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
        <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
          Are you sure you wanna delete the Command n° {command.value?.id} ?
        </h1>
        <div class="flex gap-2">
          <UiButton colorTheme="a" onClick={() => deleteTheCommand()}>
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
