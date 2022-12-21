import { defineComponent, ref, type PropType } from "vue";

export const UiInput = defineComponent({
  name: "UiInput",
  props: {
    Type: {
      type: String,
      default: "text",
    },
    Disable: {
      type: Boolean,
      default: false,
    },
    Value: {
      type: String || Number,
    },
    OnInputChange: {
      type: Function as PropType<(value: string | number) => void>,
      required: true,
    },
    PlaceHolder: {
      type: String,
    },
  },
  setup(props) {
    const inputValue = ref<string | number>(props.Value ?? "");
    const emitChange = () => props.OnInputChange(inputValue.value);

    return () => (
      <input
        class="rounded-sm  border-2 px-2 py-1 focus:py-[6px] focus:border-primary transition-all duration-200 focus:placeholder-primary w-full focus:outline-0"
        vModel={inputValue.value}
        disabled={props.Disable}
        onInput={emitChange}
        type={props.Type}
        placeholder={props.PlaceHolder}
      />
    );
  },
});
