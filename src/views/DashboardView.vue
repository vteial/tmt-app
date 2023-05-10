<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores";
import { onMounted } from "vue";
import { serialize } from "parse5";

let appStore = useAppStore();
const { session } = storeToRefs(appStore);

onMounted(() => {
  console.log("onMount started");
  console.log("dashboard");
  console.log("onMount finished");
});
</script>

<template>
  <h1>Welcome {{session.name}}!</h1>
  <br/>
  <h3>{{session.userId}} / {{session.organization}} / {{session.role}}</h3>
</template>
