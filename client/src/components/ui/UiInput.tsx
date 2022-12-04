import { defineComponent } from "vue";

export const UiInput = defineComponent({
  name: "UiInput",
  props: {},
  setup() {
    return () => (
      <div>
        <input type="text" />
      </div>
    );
  },
});
