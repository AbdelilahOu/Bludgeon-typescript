<!-- we load all the components which slows the app  -->
<!-- looking for better ways using defineAsyncComponent -->
<script lang="ts">
import { TranslationModal } from "./TranslationModal";
import { CommandCreate } from "./CommandCreate";
import { CommandDelete } from "./CommandDelete";
import { CommandUpdate } from "./CommandUpdate";
import { ProductCreate } from "./ProductCreate";
import { ProductDelete } from "./ProductDelete";
import { ProductUpdate } from "./ProductUpdate";
import { InvoiceCreate } from "./InvoiceCreate";
import { InvoiceDelete } from "./InvoiceDelete";
import { InvoiceUpdate } from "./InvoiceUpdate";
import { VendorCreate } from "./VendorCreate";
import { VendorDelete } from "./VendorDelete";
import { VendorUpdate } from "./VendorUpdate";
import { ClientDelete } from "./ClientDelete";
import { ClientUpdate } from "./ClientUpdate";
import { ClientCreate } from "./ClientCreate";
import { StockCreate } from "./StockCreate";
export default {
  components: {
    TranslationModal,
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
