import { defineComponent } from "vue";
import { UiInput } from "../ui/UiInput";

export const ClientFilter = defineComponent({
  name: "ClientFilter",
  setup() {
    return () => (
      <div class="w-full h-full">
        <div class="h-full w-full flex flex-col">
          <UiInput
            OnInputChange={() => console.log(true)}
            Type="text"
            PlaceHolder="Client name"
          />
        </div>
      </div>
    );
  },
});
