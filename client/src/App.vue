<script setup lang="ts">
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import router from "./router";

onBeforeMount(() => router.push("/"));
</script>

<template>
  <div class="w-full h-full bg-white">
    <RouterView />
  </div>
</template>
