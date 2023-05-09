<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { CIcon } from "@coreui/icons-vue";
import { cilList, cilLockLocked, cilSettings, cilUser } from "@coreui/icons";
import { useAppStore } from "@/stores";

let appStore = useAppStore();
const { sideBar } = storeToRefs(appStore);

</script>

<template>
  <CSidebar position="fixed" :visible="sideBar.visible" :unfoldable="sideBar.collapse">
    <CSidebarBrand>
      <h3>Track My Time</h3>
    </CSidebarBrand>
    <CSidebarNav>
      <CNavItem>
        <router-link to="/dashboard" class="nav-link" :class="{ active: $route.name === 'Dashboard' }">
          <CIcon customClassName="nav-icon" :icon="cilList" />
          Dashboard
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/times" class="nav-link" :class="{ active: $route.name === 'Times' }">
          <CIcon customClassName="nav-icon" :icon="cilList" />
          My Times
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/projects" class="nav-link" :class="{ active: $route.name === 'Projects' }">
          <CIcon customClassName="nav-icon" :icon="cilList" />
          My Projects
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/clients" class="nav-link" :class="{ active: $route.name === 'Clients' }">
          <CIcon customClassName="nav-icon" :icon="cilList" />
          My Clients
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/profile" class="nav-link" :class="{ active: $route.name === 'Profile' }">
          <CIcon customClassName="nav-icon" :icon="cilUser" />
          Profile
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/settings" class="nav-link" :class="{ active: $route.name === 'Settings' }">
          <CIcon customClassName="nav-icon" :icon="cilSettings" />
          Settings
        </router-link>
      </CNavItem>
      <CNavItem>
        <router-link to="/sign-out" class="nav-link" :class="{ active: $route.name === 'Sign Out' }">
          <CIcon customClassName="nav-icon" :icon="cilLockLocked" />
          Sign Out
        </router-link>
      </CNavItem>
    </CSidebarNav>
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="appStore.toggleSideBarCollapse()"
    />
  </CSidebar>
</template>

