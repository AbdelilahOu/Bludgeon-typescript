import { defineComponent } from "vue";

export const ClientView = defineComponent({
  name: "Client",
  setup() {
    return () => (
      <main class="w-full h-full px-4 py-1">
        <div class="w-full h-full flex items-center justify-center"></div>
      </main>
    );
  },
});
