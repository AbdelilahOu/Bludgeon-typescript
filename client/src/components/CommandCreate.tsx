import { defineComponent, reactive, ref, withModifiers } from "vue";
import type { newCommandT, newCommandItemT } from "@/types";
import { useCommandStore } from "@/stores/commandStore";
import { useProductStore } from "@/stores/productStore";
import { useVendorStore } from "@/stores/vendorStore";
import { useModalStore } from "@/stores/modalStore";
import { UiCheckBox } from "./ui/UiCheckBox";
import { UiButton } from "./ui/UiButton";
import { UiSelect } from "./ui/UiSelect";
import { UiInput } from "./ui/UiInput";
import { storeToRefs } from "pinia";
import UiIcon from "./ui/UiIcon.vue";
import { globalTranslate } from "@/utils/globalTranslate";

export const CommandCreate = defineComponent({
  name: "CommandCreate",
  components: { UiButton, UiCheckBox, UiIcon, UiInput, UiSelect },
  setup() {
    const isFlash = ref<boolean>(false);
    const IsClicked = ref<boolean>(false);
    const { products } = storeToRefs(useProductStore());
    const { vendors } = storeToRefs(useVendorStore());
    const newCommand = reactive<newCommandT>({
      status: "",
      vendorId: undefined,
      commandItems: [],
    });
    const commandItems = ref<newCommandItemT[]>([
      {
        productId: 0,
        quantity: 0,
      },
    ]);
    const createNewCommand = () => {
      isFlash.value = true;
      newCommand.commandItems = commandItems.value.filter(
        (item) => item.productId !== 0 && item.quantity !== 0
      );
      if (newCommand.vendorId && newCommand.commandItems.length !== 0) {
        useCommandStore().createOneCommand(newCommand);
        useModalStore().updateModal({ key: "show", value: false });
      }
      setTimeout(() => {
        isFlash.value = false;
      }, 1000);
    };
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
          class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center"
        >
          {globalTranslate("Commands.create.title")}
        </h1>
        <div class="h-full  w-full grid grid-cols-1 gap-2">
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">
              {globalTranslate("Commands.create.details.seller.title")}
            </h1>
            <UiSelect
              items={vendors.value.map((vendor) => ({
                name: vendor.name,
                id: vendor.id,
              }))}
              onSelect={(id: number) => (newCommand.vendorId = id)}
              IsClickedOuside={IsClicked.value}
            >
              {globalTranslate("Commands.create.details.seller.select")}
            </UiSelect>
          </div>
          <div class="w-full  h-full flex flex-col gap-1">
            <h1 class="font-medium">
              {" "}
              {globalTranslate("Commands.create.details.command.title")}
            </h1>
            <div class="w-full  h-full flex flex-col mb-1 gap-1">
              <div class="flex justify-between w-full">
                <div class="h-full w-full flex flex-row flex-nowrap items-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (newCommand.status = "delivered")
                        : (newCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status.delivered")}</span>
                </div>
                <div class="h-full w-full flex flex-row flex-nowrap items-center justify-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (newCommand.status = "pending")
                        : (newCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status.pending")}</span>
                </div>
                <div class="h-full w-full flex flex-row justify-end flex-nowrap items-center gap-2">
                  <UiCheckBox
                    onCheck={(check) =>
                      check
                        ? (newCommand.status = "canceled")
                        : (newCommand.status = "")
                    }
                  />
                  <span>{globalTranslate("Commands.status.canceled")}</span>
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
                  commandItems.value.push({ productId: 0, quantity: 0 })
                }
              >
                {globalTranslate("Commands.create.details.command.add")}
              </UiButton>
              <div class="w-full grid grid-cols-[1fr_1fr_36px] pb-10 overflow-auto scrollbar-thin scrollbar-thumb-transparent max-h-64 gap-1">
                <div class="flex flex-col gap-2">
                  {commandItems.value.map((item, index) => (
                    <UiSelect
                      items={products.value.map((product) => ({
                        name: product.name,
                        id: product.id,
                      }))}
                      onSelect={(id: number) => (item.productId = id)}
                      IsClickedOuside={IsClicked.value}
                    >
                      {globalTranslate(
                        "Commands.create.details.command.select"
                      )}
                    </UiSelect>
                  ))}
                </div>
                <div class="flex flex-col gap-2">
                  {commandItems.value.map((item, index) => (
                    <div class="h-full w-full items-center relative">
                      <UiInput
                        IsEmpty={isFlash.value && item.quantity == 0}
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
                  {commandItems.value.map((item, index) => (
                    <div class="flex justify-center bg-gray-100 hover:bg-gray-300 transition-all duration-200  rounded-sm items-center w-full h-full">
                      <UiIcon
                        onClick={() => commandItems.value.splice(index, 1)}
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
          <UiButton colorTheme="a" onClick={() => createNewCommand()}>
            {globalTranslate("Commands.create.button")}
          </UiButton>
        </div>
      </div>
    );
  },
});
