import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export const CommandDetails = defineComponent({
  name: "CommandDetails",
  setup() {
    const id = useRoute().params.id;
    return () => (
      <div class="w-full h-full text-black">
        {JSON.stringify(useRoute().name)}
      </div>
    );
  },
});
