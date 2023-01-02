import { ClientTable } from "@/components/user/ClientTable";
import { useClientStore } from "@/stores/clientStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export const ClientView = defineComponent({
  name: "Client",
  setup() {
    const clientStore = useClientStore();
    const { clients } = storeToRefs(clientStore);
    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full flex items-start justify-center">
          <ClientTable Clients={clients.value} />
        </div>
      </main>
    );
  },
});
