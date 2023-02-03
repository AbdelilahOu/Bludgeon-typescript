import { defineComponent } from "vue";

export const UiButton = defineComponent({
  name: "UiButton",
  props: {
    colorTheme: {
      type: String,
      required: false,
      default: "primary",
    },
    Disable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <button
        disabled={props.Disable}
        class={
          props.colorTheme == "primary"
            ? "defaultButton disabled:hover:bg-gray-50 disabled:hover:border-gray-200  hover:bg-gray-300  hover:border-gray-300 hover:text-black text-gray-600  bg-gray-50"
            : "defaultButton disabled:hover:bg-gray-500 disabled:hover:border-gray-200  hover:bg-gray-300  hover:border-gray-300 hover:text-black text-gray-900   bg-gray-400"
        }
      >
        <div class="flex items-center w-full h-full justify-center">
          {slots.default?.()}
        </div>
      </button>
    );
  },
});
