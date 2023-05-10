<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { CIcon } from "@coreui/icons-vue";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useAppStore } from "@/stores";

let appStore = useAppStore();
const { session, users } = storeToRefs(appStore);

let router = useRouter();

let organizations = appStore.getOrganizations();

let user = ref( {
  userId: '',
  password: '',
  organization: '-'
})
let message = ref('');

const signIn = function() {
  message.value = '';
  if(user.value.organization === '-') {
    message.value = 'Please select organization';
    return;
  }

  let org = appStore.orgs.find((item) => item.id === user.value.organization);
  if(!org) {
    message.value = 'Invalid organization';
    return;
  }
  let usr = org.users.find((item) => item.userId === user.value.userId);
  if(!usr) {
    message.value = "User doesn't exist...";
    return;
  }
  if(usr.userId !== user.value.userId || usr.password !== user.value.password) {
    message.value = 'Invalid credentials...';
    return;
  }
  Object.assign(session.value, usr);
  session.value.organization = org.name;
  router.push("/");
};

onMounted(() => {
  console.log("onMount started");
  console.log("sign-in");
  user.value.userId = 'amazon_user1@gmail.com';
  user.value.password = 'pass';
  user.value.organization = 'org_0';
  console.log("onMount finished");
});
</script>

<template>
  <div class="min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Sign In</h1>
                  <p class="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon :icon="cilUser" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autocomplete="username"
                      v-model="user.userId"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon :icon="cilLockLocked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      v-model="user.password"
                    />
                  </CInputGroup>
                  <CFormSelect v-model="user.organization">
                    <option value="-">&lt;Select Organization&gt;</option>
                    <option :value="item.id" v-for="item in organizations">{{item.name}}</option>
                  </CFormSelect>
                  <br/>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" @click="signIn()"> Sign In</CButton>
                    </CCol>
                    <!--
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                    -->
                  </CRow>
                  <br/>
                  <CAlert color="danger" v-if="message !== ''">{{message}}</CAlert>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
