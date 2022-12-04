import { defineComponent } from "vue";

export const UiButton = defineComponent({
  name: "UiButton",
  props: {
    colorTheme: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  setup(props, { slots }) {
    return () => (
      <button
        class={
          props.colorTheme == "primary"
            ? "h-fit px-4 py-2 flex items-center justify-center text-center w-28 bg-gray-50 rounded-sm border "
            : ""
        }
      >
        {slots.default?.()}
      </button>
    );
  },
});
