<script setup lang="ts">
import { onMounted } from "vue";
import { GetTokenSilentlyOptions, useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();

const isProgress = auth0.isLoading;
const isSignedIn = auth0.isAuthenticated;
const user = auth0.user;

const signIn = function() {
  auth0.loginWithRedirect();
};

const signOut = function() {
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
};

onMounted(() => {
  console.log("onMount started");
  // auth0.getAccessTokenSilently({
  //   detailedResponse: true
  // } as GetTokenSilentlyOptions).then((res) => {
  //   console.log(res);
  // });
  // try {
  //   auth0.getAccessTokenSilently().then((res) => {
  //     console.log(1)
  //     console.log(res);
  //   });
  // } catch (exception) {
  //   console.log(2)
  //   console.log(exception);
  // }
  // if (auth0.isAuthenticated.value) {
  //   auth0.getAccessTokenSilently().then((res) => {
  //     console.log(res);
  //     console.log(auth0.user.value);
  //     // @ts-ignore
  //     session.accessToken = res;
  //     // @ts-ignore
  //     session.userId = auth0.user.value.email;
  //     // @ts-ignore
  //     session.name = auth0.user.value.name;
  //     console.log(appStore.session);
  //   });
  //   router.push("/dashboard");
  // } else {
  //   router.push("/index");
  // }

  // appStore.init().then((res) => {
  //   if (session.value.userId === "-") router.push("/index"); else router.push("/dashboard");
  // });
  // setTimeout(() => {
  //   if (session.value.userId === "-") router.push("/index"); else router.push("/dashboard");
  // }, 1000);

  console.log("onMount finished");
});
</script>

<template>
    <br/>
    <p>
      Is Progress : {{isProgress}}&nbsp;&nbsp;Is SignedIn : {{isSignedIn}}
    </p>
    <p>User Name : {{user?.name}}</p>
    <br/><br/>
    <CButton color="primary" v-if="!isProgress && !isSignedIn" @click="signIn()">Sign In</CButton>
    <CButton color="primary" v-else @click="signOut()">Sign Out</CButton>
</template>
