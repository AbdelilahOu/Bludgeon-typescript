<<<<<<< HEAD
<!-- npm i vite-svg-loader -->
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
const icon = defineAsyncComponent(
  () => import(`../../assets/svg/${props.name}.svg`)
);
</script>
<template>
  <component
    class="w-8 h-8 cursor-pointer rounded-full hover:bg-gray-100 p-1"
    :is="icon"
  />
</template>
=======
<!-- npm i vite-svg-loader -->
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
const icon = defineAsyncComponent(
  () => import(`../../assets/svg/${props.name}.svg`)
);
</script>
<template>
  <component
    class="w-8 h-8 cursor-pointer rounded-full hover:bg-gray-100 p-1"
    :is="icon"
  />
</template>
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
