<!-- we load all the components which slows the app  -->
<!-- looking for better ways using defineAsyncComponent -->
<script lang="ts">
import { CommandCreate } from "./command/CommandCreate";
import { CommandDelete } from "./command/CommandDelete";
import { CommandUpdate } from "./command/CommandUpdate";
import { ProductCreate } from "./product/ProductCreate";
import { ProductDelete } from "./product/ProductDelete";
import { ProductUpdate } from "./product/ProductUpdate";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceDelete } from "./invoice/InvoiceDelete";
import { InvoiceUpdate } from "./invoice/InvoiceUpdate";
import { VendorCreate } from "./vendor/VendorCreate";
import { VendorDelete } from "./vendor/VendorDelete";
import { VendorUpdate } from "./vendor/VendorUpdate";
import { ClientDelete } from "./user/ClientDelete";
import { ClientUpdate } from "./user/ClientUpdate";
import { ClientCreate } from "./user/ClientCreate";
import { StockCreate } from "./stock/StockCreate";

export default {
  components: {
    CommandCreate,
    CommandDelete,
    CommandUpdate,
    ProductUpdate,
    ProductDelete,
    ProductCreate,
    InvoiceCreate,
    InvoiceUpdate,
    InvoiceDelete,
    VendorCreate,
    VendorDelete,
    VendorUpdate,
    ClientDelete,
    ClientUpdate,
    ClientCreate,
    StockCreate,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      name: props.name,
    };
  },
};
</script>

<template>
  <component :is="name" />
</template>
