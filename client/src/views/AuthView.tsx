<<<<<<< HEAD
import { UiButton } from "@/components/ui/UiButton";
import { UiInput } from "@/components/ui/UiInput";
import { defineComponent, ref } from "vue";

export const AuthView = defineComponent({
  name: "Auth",
  components: { UiButton, UiInput },
  setup() {
    const username = ref<string>("");
    const password = ref<string>("");
    const LogIn = () => {};
    return () => (
      <main class="w-screen h-screen">
        <div class="w-full h-full flex justify-center items-center flex-col">
          <div class="w-1/2 h-fit z-50 gap-3 flex flex-col bg-white p-2 min-w-[350px]">
            <h1 class="font-semibold text-lg text-gray-800 border-b-2 border-b-gray-500 pb-2 uppercase text-center">
              Log in
            </h1>
            <div class="h-full w-full flex flex-col gap-2">
              <UiInput
                Type="text"
                PlaceHolder="Username"
                IsEmpty={false}
                OnInputChange={(input) =>
                  (username.value =
                    typeof input == "number" ? JSON.stringify(input) : input)
                }
              />
              <UiInput
                Type="password"
                PlaceHolder="Password"
                IsEmpty={false}
                OnInputChange={(input) =>
                  (password.value =
                    typeof input == "number" ? JSON.stringify(input) : input)
                }
              />
            </div>
            <div class="flex">
              <UiButton colorTheme="a" onClick={() => LogIn()}>
                Log in
              </UiButton>
            </div>
          </div>
        </div>
      </main>
    );
  },
});
=======
import { defineComponent } from "vue";

export const AuthView = defineComponent({
  name: "Auth",
  setup() {
    return () => (
      <main class="w-screen h-screen">
        <div class="w-full h-full flex flex-col"></div>
      </main>
    );
  },
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
