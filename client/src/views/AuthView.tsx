import { defineComponent } from "vue";

export const AuthView = defineComponent({
  name: "Auth",
  setup() {
    return () => (
      <main class="w-screen h-screen">
        <div class="w-full h-full flex flex-col"></div>
      </main>
    );
  },
});
