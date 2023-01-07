import { UiButton } from "@/components/ui/UiButton";
import { ClientTable } from "@/components/user/ClientTable";
import { useClientStore } from "@/stores/clientStore";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

export const ClientView = defineComponent({
  name: "Client",
  setup() {
    const clientStore = useClientStore();
    const { clients } = storeToRefs(clientStore);
    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full flex flex-col items-start justify-start">
          <div class="w-full h-fit flex justify-start gap-2 pb-2">
            <UiButton onClick={() => console.log("aaaaaaa")}>Filter</UiButton>
            <UiButton onClick={() => console.log("aaaaaaa")}>
              Create New
            </UiButton>
          </div>
          <ClientTable
            sortBy={(by: string) => console.log(by)}
            Clients={clients.value}
          />
        </div>
      </main>
    );
  },
});
