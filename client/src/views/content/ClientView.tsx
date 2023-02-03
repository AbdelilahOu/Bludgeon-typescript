import { defineComponent, onBeforeMount, ref, Transition } from "vue";
import { ClientTable } from "@/components/user/ClientTable";
import { useClientStore } from "@/stores/clientStore";
import { UiButton } from "@/components/ui/UiButton";
import { useModalStore } from "@/stores/modalStore";
import { UiInput } from "@/components/ui/UiInput";
import UiIcon from "@/components/ui/UiIcon.vue";
import { storeToRefs } from "pinia";

export const ClientView = defineComponent({
  name: "Clients",
  components: {
    ClientTable,
    UiButton,
    UiInput,
    UiIcon,
  },
  setup() {
    const modalStore = useModalStore();
    const clientStore = useClientStore();
    const { clients } = storeToRefs(clientStore);
    //
    const searchQuery = ref<string>("");

    //
    onBeforeMount(() => {
      if (!clients.value.length) clientStore.getAllClients();
    });
    //
    const updateModal = (name: string) => {
      modalStore.updateModal({ key: "show", value: true });
      modalStore.updateModal({ key: "name", value: name });
    };
    //
    const sortClientsBy = (by: string) => {};

    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full flex flex-col items-start justify-start">
          <Transition appear>
            <div class="flex justify-between w-full gap-9 my-1">
              <div class="w-1/3">
                <UiInput
                  IsEmpty={false}
                  OnInputChange={(value) =>
                    (searchQuery.value =
                      typeof value !== "string"
                        ? JSON.stringify(value).toLocaleLowerCase()
                        : value.toLocaleLowerCase())
                  }
                  Type="text"
                  PlaceHolder="Search"
                >
                  <UiIcon
                    class=" fill-gray-400 cursor-default hover:bg-white"
                    name="search"
                  />
                </UiInput>
              </div>
              <div class="w-1/4 flex gap-2">
                <UiButton
                  colorTheme="a"
                  onClick={() => updateModal("ClientCreate")}
                >
                  <UiIcon
                    class=" fill-gray-900 cursor-default hover:bg-transparent"
                    name="add"
                  />{" "}
                  Add new client{" "}
                </UiButton>
              </div>
            </div>
          </Transition>

          <Transition appear>
            <ClientTable
              FilterParam={searchQuery.value}
              sortBy={(by: string) => sortClientsBy(by)}
              Clients={clients.value}
            />
          </Transition>
        </div>
      </main>
    );
  },
});
