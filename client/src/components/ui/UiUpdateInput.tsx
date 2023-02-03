<<<<<<< HEAD
import { defineComponent, ref, type PropType } from "vue";

export const UiUpdateInput = defineComponent({
  name: "UiUpdateInput",
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
      type: [String, Number],
      required: true,
      default: "",
    },
    OnInputChange: {
      type: Function as PropType<(value: string | number) => void>,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref<string | number>(props.Value ?? "");
    const emitChange = () => props.OnInputChange(inputValue.value);
    return () => (
      <input
        class={"defaultInput border-2 rounded-sm"}
        vModel={inputValue.value}
        disabled={props.Disable}
        onInput={emitChange}
        type={props.Type}
      />
    );
  },
});
=======
import { defineComponent, ref, type PropType } from "vue";

export const UiUpdateInput = defineComponent({
  name: "UiUpdateInput",
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
      type: [String, Number],
      required: true,
      default: "",
    },
    OnInputChange: {
      type: Function as PropType<(value: string | number) => void>,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref<string | number>(props.Value ?? "");
    const emitChange = () => props.OnInputChange(inputValue.value);
    return () => (
      <input
        class={"defaultInput border-2 rounded-sm"}
        vModel={inputValue.value}
        disabled={props.Disable}
        onInput={emitChange}
        type={props.Type}
      />
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
