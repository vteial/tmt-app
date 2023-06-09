<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "@/stores";

const appStore = useAppStore();

onMounted(() => {
  console.log("onMount started");
  appStore.signOut();
  console.log("onMount finished");
});
</script>

<template>
  <div class="min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <h3>Signing out...</h3>
      </CRow>
    </CContainer>
  </div>
</template>
