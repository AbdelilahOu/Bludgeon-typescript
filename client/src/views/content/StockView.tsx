import { defineComponent } from "vue";

export const StockView = defineComponent({
  name: "Stock",
  setup() {
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div>Stocks</div>
      </main>
    );
  },
});
