<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";

let router = useRouter();

const signIn = function() {
  router.push("/sign-in");
}
onMounted(() => {
  console.log("onMount started");
  console.log("landing");
  console.log("onMount finished");
});
</script>

<template>
  <CCard id="home">
    <CCardBody>
      <h1>Welcome!</h1>
      <CButton color="primary" @click="signIn()">Sign In</CButton>
    </CCardBody>
  </CCard>
  <!--
  <div id="home" class="align-items-center">
    <h2>Carousal</h2>
  </div>
  <hr/>
  <div id="features" class="align-items-center">
    <h2>Features</h2>
  </div>
  <hr/>
  <div id="pricing" class="align-items-center">
    <h2>Pricing</h2>
  </div>
  <hr/>
  <div id="about" class="align-items-center">
    <h2>About</h2>
  </div>
  -->
</template>

<style scoped>

#home {
    min-height: 500px;
}

#features {
    min-height: 500px;
}

#pricing {
    min-height: 500px;
}

#about {
    min-height: 500px;
}
</style>
