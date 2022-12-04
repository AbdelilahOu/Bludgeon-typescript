import { defineComponent } from "vue";
import { Vue3Lottie } from "vue3-lottie";

export const AnimationHolder = defineComponent({
  name: "AnimationHolder",
  props: {
    lottierFile: {
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  setup(props) {
    return () => (
      <div class="w-fit h-fit">
        <Vue3Lottie
          animationData={props.lottierFile}
          height={props.height}
          width={props.width}
        />
      </div>
    );
  },
});
