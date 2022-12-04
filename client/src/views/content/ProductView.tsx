import { orderBox } from "@/animations";
import { AnimationHolder } from "@/components/ui/UiAnimation";
import { defineComponent } from "vue";

export const ProductView = defineComponent({
  name: "Product",
  setup() {
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div class="w-full h-full flex items-center justify-center">
          <AnimationHolder
            lottierFile={orderBox}
            width={"200px"}
            height={"200px"}
          />
        </div>
      </main>
    );
  },
});
