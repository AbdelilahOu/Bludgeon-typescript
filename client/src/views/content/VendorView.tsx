<<<<<<< HEAD
import { defineComponent, onBeforeMount, ref, Transition } from "vue";
import { VendorTable } from "@/components/vendor/VendorTable";
import { useVendorStore } from "@/stores/vendorStore";
import { UiButton } from "@/components/ui/UiButton";
import { useModalStore } from "@/stores/modalStore";
import { UiInput } from "@/components/ui/UiInput";
import UiIcon from "@/components/ui/UiIcon.vue";
import { storeToRefs } from "pinia";

export const VendorView = defineComponent({
  name: "Vendors",
  components: {
    VendorTable,
    UiButton,
    UiInput,
    UiIcon,
  },
  setup() {
    const modalStore = useModalStore();
    const VendorStore = useVendorStore();
    const { vendors } = storeToRefs(VendorStore);
    //
    const searchQuery = ref<string>("");
    //
    onBeforeMount(() => {
      if (!vendors.value.length) VendorStore.getAllVendors();
    });
    //
    const updateModal = (name: string) => {
      modalStore.updateModal({ key: "show", value: true });
      modalStore.updateModal({ key: "name", value: name });
    };
    //
    const sortVendorsBy = (by: string) => {};

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
                  onClick={() => updateModal("VendorCreate")}
                >
                  <UiIcon
                    class=" fill-gray-900 cursor-default hover:bg-transparent"
                    name="add"
                  />{" "}
                  Add new vendor{" "}
                </UiButton>
              </div>
            </div>
          </Transition>
          <Transition appear>
            <VendorTable
              FilterParam={searchQuery.value}
              sortBy={(by: string) => sortVendorsBy(by)}
              Vendors={vendors.value}
            />
          </Transition>
        </div>
      </main>
    );
  },
});
=======
import { defineComponent, onBeforeMount, ref, Transition } from "vue";
import { VendorTable } from "@/components/vendor/VendorTable";
import { useVendorStore } from "@/stores/vendorStore";
import { UiButton } from "@/components/ui/UiButton";
import { useModalStore } from "@/stores/modalStore";
import { UiInput } from "@/components/ui/UiInput";
import UiIcon from "@/components/ui/UiIcon.vue";
import { storeToRefs } from "pinia";

export const VendorView = defineComponent({
  name: "Vendors",
  components: {
    VendorTable,
    UiButton,
    UiInput,
    UiIcon,
  },
  setup() {
    const modalStore = useModalStore();
    const VendorStore = useVendorStore();
    const { vendors } = storeToRefs(VendorStore);
    //
    const searchQuery = ref<string>("");
    //
    onBeforeMount(() => {
      if (!vendors.value.length) VendorStore.getAllVendors();
    });
    //
    const updateModal = (name: string) => {
      modalStore.updateModal({ key: "show", value: true });
      modalStore.updateModal({ key: "name", value: name });
    };
    //
    const sortVendorsBy = (by: string) => {};

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
                  onClick={() => updateModal("VendorCreate")}
                >
                  <UiIcon
                    class=" fill-gray-900 cursor-default hover:bg-transparent"
                    name="add"
                  />{" "}
                  Add new vendor{" "}
                </UiButton>
              </div>
            </div>
          </Transition>
          <Transition appear>
            <VendorTable
              FilterParam={searchQuery.value}
              sortBy={(by: string) => sortVendorsBy(by)}
              Vendors={vendors.value}
            />
          </Transition>
        </div>
      </main>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
