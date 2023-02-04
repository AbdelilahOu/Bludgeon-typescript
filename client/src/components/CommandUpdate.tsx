import {
  defineComponent,
  reactive,
  onBeforeUnmount,
  ref,
  withModifiers,
} from "vue";
import { useCommandStore } from "@/stores/commandStore";
import { useModalStore } from "@/stores/modalStore";
import { UiUpdateInput } from "./ui/UiUpdateInput";
import { UiButton } from "./ui/UiButton";
import type { updateCommandT } from "@/types";
import { storeToRefs } from "pinia";
import { UiUpdateSelect } from "./ui/UiUpdateSelect";
import { useClientStore } from "@/stores/clientStore";
import { UiCheckBox } from "./ui/UiCheckBox";
import { useProductStore } from "@/stores/productStore";
import UiIcon from "./ui/UiIcon.vue";
import { globalTranslate } from "@/utils/globalTranslate";

export const CommandUpdate = defineComponent({
  name: "CommandUpdate",
  components: { UiButton, UiUpdateInput, UiIcon, UiUpdateSelect, UiCheckBox },
  setup() {
    //
    const productStore = useProductStore();
    const clientStore = useClientStore();
    const modalStore = useModalStore();
    //
    const { command: CommandRow } = storeToRefs(modalStore);

    const { products } = storeToRefs(productStore);
    const { clients } = storeToRefs(clientStore);
    const IsClicked = ref<boolean>(false);
    //
    const Command: updateCommandT = {
      id: undefined,
      status: undefined,
      clientId: undefined,
      commandItems: [],
    };
    //
    const updateCommand = reactive<updateCommandT>(
      CommandRow.value ? CommandRow.value : Command
    );
    //
    const updateTheCommand = () => {
      if (updateCommand.id) {
        useCommandStore().updateOneCommand(updateCommand.id, updateCommand);
        modalStore.updateModal({ key: "show", value: false });
      }
    };
    onBeforeUnmount(() => modalStore.updateCommandRow(null));

    return () => (
      <div
        onClick={withModifiers(
          () => (IsClicked.value = !IsClicked.value),
          ["self"]
        )}
        class="w-5/6 lg:w-1/2 relative h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]"
      >
        <h1
          onClick={withModifiers(
            () => (IsClicked.value = !IsClicked.value),
            ["self"]
          )}
          class="font-semibold  text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          {globalTranslate("Commands.update.title")} N° {updateCommand.id}
        </h1>
        <div class="h-full  w-full grid grid-cols-1 gap-2">
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">
              {globalTranslate("Commands.update.details.client.title")}
            </h1>
            <UiUpdateSelect
              Value={
                clients.value.find((cli) => updateCommand.clientId === cli.id)
                  ?.name ?? ""
              }
              items={clients.value.map((client) => ({
                name: client.name,
                id: client.id,
              }))}
              onSelect={(id: number) => (updateCommand.clientId = id)}
              IsClickedOuside={IsClicked.value}
            >
              {globalTranslate("Commands.update.details.client.select")}
            </UiUpdateSelect>
          </div>
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">
              {globalTranslate("Commands.update.details.command.title")}
            </h1>
            <div class="w-full  h-full flex flex-col mb-1 gap-1">
              <div class="flex justify-between w-full">
                <div class="h-full w-full flex flex-row flex-nowrap items-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (updateCommand.status = "Delivered")
                        : (updateCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status[0]")}</span>
                </div>
                <div class="h-full w-full flex flex-row flex-nowrap items-center justify-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (updateCommand.status = "pending")
                        : (updateCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status[1]")}</span>
                </div>
                <div class="h-full w-full flex flex-row justify-end flex-nowrap items-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (updateCommand.status = "canceled")
                        : (updateCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status[2]")}</span>
                </div>
              </div>
            </div>
            <div
              onClick={withModifiers(
                () => (IsClicked.value = !IsClicked.value),
                ["self"]
              )}
              class="w-full  h-full flex flex-col gap-1"
            >
              <UiButton
                onClick={() =>
                  updateCommand.commandItems?.push({
                    productId: 0,
                    quantity: 0,
                  })
                }
              >
                {globalTranslate("Commands.update.details.command.add")}
              </UiButton>
              <div class="w-full grid grid-cols-[1fr_1fr_36px] pb-10 overflow-auto scrollbar-thin scrollbar-thumb-transparent max-h-64 gap-1">
                <div class="flex flex-col gap-2">
                  {updateCommand.commandItems?.map((item, index) => (
                    <UiUpdateSelect
                      Value={
                        products.value.find((pro) => pro.id == item.productId)
                          ?.name ?? ""
                      }
                      items={products.value.map((product) => ({
                        name: product.name,
                        id: product.id,
                      }))}
                      onSelect={(id: number) => (item.productId = id)}
                      IsClickedOuside={IsClicked.value}
                    >
                      {globalTranslate(
                        "Commands.update.details.command.select"
                      )}
                    </UiUpdateSelect>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {updateCommand.commandItems?.map((item, index) => (
                    <div class="h-full w-full items-center relative">
                      <UiUpdateInput
                        Value={item.quantity}
                        PlaceHolder={globalTranslate(
                          "Commands.create.details.command.placeholder"
                        )}
                        Type="number"
                        OnInputChange={(value) =>
                          (item.quantity = Number(value))
                        }
                      />
                    </div>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {updateCommand.commandItems?.map((item, index) => (
                    <div class="flex justify-center bg-gray-100 hover:bg-gray-300 transition-all duration-200  rounded-sm items-center w-full h-full">
                      <UiIcon
                        onClick={() => {
                          updateCommand.commandItems?.splice(index, 1);
                          if (item.id)
                            useCommandStore().deleteOneCommandItem(item.id);
                        }}
                        name="delete"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <UiButton colorTheme="a" onClick={() => updateTheCommand()}>
            {globalTranslate("Commands.update.button")}
          </UiButton>
        </div>
      </div>
    );
  },
});
