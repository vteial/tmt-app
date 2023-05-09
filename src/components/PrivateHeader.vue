<script lang="ts" setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { CIcon } from "@coreui/icons-vue";
import { cilLockLocked, cilMenu, cilSettings, cilUser } from "@coreui/icons";
import avatar from "@/assets/images/avatar.png";
import { useAppStore } from "@/stores";

let appStore = useAppStore();
const { session } = storeToRefs(appStore);

let router = useRouter();

const signOut = function() {
  session.value.userId = '-';
  router.push("/");
};
</script>

<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="appStore.toggleSideBarVisibility()">
        <CIcon :icon="cilMenu" size="lg" />
      </CHeaderToggler>
      <!--
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" :icon="cilBell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" :icon="cilList" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" :icon="cilEnvelopeOpen" size="lg" />
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      -->
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
          <CAvatar :src="avatar" size="md" />
        </CDropdownToggle>
        <CDropdownMenu class="pt-0">
          <CDropdownItem>
            <CIcon :icon="cilUser" />
            Profile
          </CDropdownItem>
          <CDropdownItem>
            <CIcon :icon="cilSettings" />
            Settings
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem @click="signOut()">
            <CIcon :icon="cilLockLocked" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CContainer>
  </CHeader>
</template>
