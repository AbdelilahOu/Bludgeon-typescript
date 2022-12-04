import { truckLeaving } from "@/animations";
import { AnimationHolder } from "@/components/ui/UiAnimation";
import { defineComponent } from "vue";

export const CommandView = defineComponent({
  name: "Command",
  setup() {
    return () => (
      <main class="w-full h-full flex items-center justify-center px-3 py-1">
        <AnimationHolder
          lottierFile={truckLeaving}
          width={"200px"}
          height={"200px"}
        />
      </main>
    );
  },
});
