<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/PublicHeader.vue";
import AppFooter from "@/components/PublicFooter.vue";
</script>

<template>
  <div>
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <br/><br/><br/>
          <RouterView />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

