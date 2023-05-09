<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores";

let appStore = useAppStore();
const { session } = storeToRefs(appStore);

let router = useRouter();

const signOut = function() {
  session.value.userId = '-';
  router.push("/");
};

onMounted(() => {
  console.log("onMount started");
  signOut();
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
