<script setup lang="ts">
import { useProductStore } from "./stores/productStore";
import { useClientStore } from "./stores/clientStore";
import { useVendorStore } from "./stores/vendorStore";
import { RouterView, useRouter } from "vue-router";
import { onBeforeMount, Transition } from "vue";

onBeforeMount(() => {
  useProductStore().getAllProducts();
  useClientStore().getAllClients();
  useVendorStore().getAllVendors();
  useRouter().push("/Auth");
});
</script>

<template>
  <div class="w-screen overflow-x-hidden h-screen bg-white">
    <RouterView v-slot="{ Component }">
      <Transition name="router" :appear="true">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
