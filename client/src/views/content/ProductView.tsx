import { ProductTable } from "@/components/product/ProductTable";
import { useProductStore } from "@/stores/productStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export const ProductView = defineComponent({
  name: "Product",
  setup() {
    const productStore = useProductStore();
    const { products } = storeToRefs(productStore);
    const sortProductBy = (by: string) => "";
    return () => (
      <main class="w-full h-full px-3">
        <div class="w-full h-full flex flex-col items-start justify-start">
          <ProductTable
            sortBy={(by: string) => sortProductBy(by)}
            Products={products.value}
          />
        </div>
      </main>
    );
  },
});
