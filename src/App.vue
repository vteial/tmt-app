<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from "@/stores";
const appStore = useAppStore();
appStore.init();
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/main.scss';
</style>
