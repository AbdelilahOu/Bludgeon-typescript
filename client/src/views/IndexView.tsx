import { AnimationHolder } from "@/components/ui/UiAnimation";
import { useAnimationStore } from "@/stores/animationStore";
import { Navigation } from "@/components/Navigation";
import { SideBar } from "@/components/SideBar";
import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { UiInput } from "@/components/ui/UiInput";

export const IndexView = defineComponent({
  name: "Index",
  setup() {
    const { IndexAnimation, IsLoading } = storeToRefs(useAnimationStore());
    const IsCollapse = ref<boolean>(false);

    return () => (
      <main
        class={
          !IsCollapse.value
            ? "w-screen h-screen grid grid-cols-[180px_1fr] transition-all duration-200 transform"
            : "w-screen h-screen grid grid-cols-[47px_1fr] transition-all duration-200 transform"
        }
      >
        <SideBar
          onCollapse={(IsCollapsed: boolean) =>
            (IsCollapse.value = IsCollapsed)
          }
        />
        <div class="grid grid-rows-[50px_1fr]">
          <Navigation />
          <div class="w-full h-full relative  flex flex-col items-center justify-center">
            {IsLoading.value ? (
              <div class="w-full h-full flex items-center justify-center absolute bg-gray-400 z-50 bg-transparent bg-opacity-30">
                {
                  <AnimationHolder
                    lottierFile={IndexAnimation.value}
                    width={"200px"}
                    height={"200px"}
                  />
                }
              </div>
            ) : (
              ""
            )}
            <RouterView></RouterView>
          </div>
        </div>
      </main>
    );
  },
});
