<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { onBeforeMount, Transition } from "vue";
import { useClientStore } from "./stores/clientStore";
import { useProductStore } from "./stores/productStore";
import { useVendorStore } from "./stores/vendorStore";
import { useCommandStore } from "./stores/commandStore";
import { useStockStore } from "./stores/stockStore";
import { useInvoiceStore } from "./stores/invoiceStore";

onBeforeMount(() => {
  useStockStore().getAllStockMouvements();
  useProductStore().getAllProducts();
  useCommandStore().getAllCommands();
  useInvoiceStore().getAllInvoices();
  useClientStore().getAllClients();
  useVendorStore().getAllVendors();
  useRouter().push("/Clients");
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
