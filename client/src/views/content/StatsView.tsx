import { defineComponent } from "vue";

export const StatsView = defineComponent({
  name: "Stats",
  setup() {
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div>Statss</div>
      </main>
    );
  },
});
