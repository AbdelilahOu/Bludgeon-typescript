<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import { onBeforeMount } from "vue";

onBeforeMount(() => useRouter().push("/"));
</script>

<template>
  <div class="w-full h-full bg-white">
    <RouterView />
  </div>
</template>
