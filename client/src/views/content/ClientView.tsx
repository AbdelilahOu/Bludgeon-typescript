import { ClientTable } from "@/components/user/ClientTable";
import { defineComponent } from "vue";

export const ClientView = defineComponent({
  name: "Client",
  setup() {
    return () => (
      <main class="w-full h-full px-4">
        <div class="w-full h-full flex items-start justify-center">
          <ClientTable></ClientTable>
        </div>
      </main>
    );
  },
});
