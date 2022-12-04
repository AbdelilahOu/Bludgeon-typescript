import { defineComponent } from "vue";

export const UiToastHolder = defineComponent({
  name: "UiToastHolder",
  setup() {
    return () => (
      <div>
        <span>toast holder</span>
      </div>
    );
  },
});
