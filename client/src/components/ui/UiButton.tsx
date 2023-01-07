import { defineComponent, type PropType } from "vue";

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
            ? "h-8 px-4 py-1 hover:bg-gray-300 hover:border-gray-300 hover:text-black text-gray-600 transition-all duration-200 flex items-center whitespace-nowrap justify-center text-center w-28 bg-gray-50 rounded-sm border "
            : ""
        }
      >
        {slots.default?.()}
      </button>
    );
  },
});
