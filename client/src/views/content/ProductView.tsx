import { defineComponent } from "vue";

export const ProductView = defineComponent({
  name: "Product",
  setup() {
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div class="w-full h-full flex items-center justify-center">
          <div class="bg-red-300"></div>
        </div>
      </main>
    );
  },
});
