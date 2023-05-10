<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores";

let appStore = useAppStore();
const { session } = storeToRefs(appStore);

let router = useRouter();

onMounted(() => {
  console.log("onMount started");

  appStore.init().then((res) => {
    if (session.value.userId === "-") router.push("/index"); else router.push("/dashboard");
  });
  // setTimeout(() => {
  //   if (session.value.userId === "-") router.push("/index"); else router.push("/dashboard");
  // }, 1000);

  console.log("onMount finished");
});
</script>

<template>
  <CContainer>
    <br/><br/>
    <br/><br/>
    <h1>Loading</h1>
    <br/><br/>
    <CPlaceholder component="p" animation="glow">
      <CPlaceholder color="primary" :xs="12"/>
    </CPlaceholder>
  </CContainer>
</template>
