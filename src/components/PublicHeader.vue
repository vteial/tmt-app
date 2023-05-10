<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(true);

</script>

<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light" placement="fixed-top">
    <CContainer md lg>
      <CNavbarBrand href="#">Track My Time</CNavbarBrand>
      <CNavbarToggler @click="visible = !visible" />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav placement="fixed-top" class="me-auto">
          <CNavItem>
            <CNavLink href="/landing#home">
              Home
            </CNavLink>
          </CNavItem>
          <!--
          <CNavItem>
            <CNavLink href="/landing#features">
              Features
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/landing#pricing">
              Pricing
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/landing#about">
              About
            </CNavLink>
          </CNavItem>
          -->
        </CNavbarNav>
        <CNavbarNav>
          <CNavItem>
            <router-link to="/sign-in" class="nav-link" :class="{ active: $route.name === 'Sign In' }">
              Sign In
            </router-link>
          </CNavItem>
          <!--
          <CNavItem>
            <router-link to="/sign-up" class="nav-link" :class="{ active: $route.name === 'Sign Up' }">
              Sign Up
            </router-link>
          </CNavItem>
          -->
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</template>
