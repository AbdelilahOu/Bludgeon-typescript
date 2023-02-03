<script setup lang="ts">
import { useInvoiceStore } from "./stores/invoiceStore";
import { useProductStore } from "./stores/productStore";
import { useCommandStore } from "./stores/commandStore";
import { useClientStore } from "./stores/clientStore";
import { useVendorStore } from "./stores/vendorStore";
import { useStockStore } from "./stores/stockStore";
import { RouterView, useRouter } from "vue-router";
import { onBeforeMount, Transition } from "vue";

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
