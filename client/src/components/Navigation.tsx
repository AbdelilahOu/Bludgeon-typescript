import { useRouterStore } from "@/stores/routerStore";
import { RouterLink, useRouter } from "vue-router";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

export const Navigation = defineComponent({
  name: "Navigation",
  setup() {
    const router = useRouter();
    const { ActiveLink } = storeToRefs(useRouterStore());
    return () => (
      <header class="w-full h-full ">
        <div class="w-full h-full flex  items-center p-3 justify-between">
          <div class="text-black flex items-center justify-center gap-2">
            <span
              onClick={() => router.back()}
              class="flex items-center justify-center cursor-pointer fill-primary hover:fill-gray-800 transform-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m11.1 19.1-6.45-6.475q-.15-.125-.212-.288-.063-.162-.063-.337 0-.175.063-.338.062-.162.212-.287L11.1 4.9q.225-.2.525-.213.3-.012.525.213.225.225.237.525.013.3-.212.55l-5.3 5.275H18.5q.3 0 .525.212.225.213.225.538 0 .325-.225.537-.225.213-.525.213H6.875l5.3 5.3q.2.2.212.512.013.313-.212.538-.225.225-.537.225-.313 0-.538-.225Z" />
              </svg>
            </span>
            <span
              onClick={() => router.forward()}
              class="flex rotate-180 items-center justify-center cursor-pointer fill-primary hover:fill-gray-800 transform-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m11.1 19.1-6.45-6.475q-.15-.125-.212-.288-.063-.162-.063-.337 0-.175.063-.338.062-.162.212-.287L11.1 4.9q.225-.2.525-.213.3-.012.525.213.225.225.237.525.013.3-.212.55l-5.3 5.275H18.5q.3 0 .525.212.225.213.225.538 0 .325-.225.537-.225.213-.525.213H6.875l5.3 5.3q.2.2.212.512.013.313-.212.538-.225.225-.537.225-.313 0-.538-.225Z" />
              </svg>
            </span>
            <span class="pb-[3px] text-primary">
              <RouterLink to="/">🏠</RouterLink>{" "}
              {ActiveLink.value !== "Home" ? (
                <span>
                  /<span> {ActiveLink.value}</span>
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
          <div class="cursor-pointer hover:bg-gray-200 transition-all duration-300 p-[3px] rounded-sm">
            🔔
          </div>
        </div>
      </header>
    );
  },
});
