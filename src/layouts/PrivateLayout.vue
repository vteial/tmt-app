<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/PrivateHeader.vue";
import AppSideBar from "@/components/AppSideBar.vue";
import AppFooter from "@/components/PrivateFooter.vue";
</script>

<template>
  <div>
    <AppSideBar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <RouterView />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

