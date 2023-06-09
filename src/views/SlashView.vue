<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores";

const router = useRouter();

let appStore = useAppStore();
const { isAuthIsProgress, isAuthenticated } = storeToRefs(appStore);

onMounted(() => {
  console.log("onMount started");
  console.log("SlashView");
  setTimeout(() => {
    console.log("isProgress: " + isAuthIsProgress.value + " isSignedIn: " + isAuthenticated.value);
    if (!isAuthIsProgress.value && isAuthenticated.value) {
      appStore.init();
      router.push("/dashboard");
    } else {
      router.push("/index");
    }
  }, 1000);
  console.log("onMount finished");
});
</script>

<template>
  <CContainer>
    <br /><br />
    <br /><br />
    <h1>Loading</h1>
    <br /><br />
    <CPlaceholder component="p" animation="glow">
      <CPlaceholder color="primary" :xs="12" />
    </CPlaceholder>
  </CContainer>
</template>
