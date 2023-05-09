<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { CIcon } from "@coreui/icons-vue";
import { cilLockLocked, cilUser } from "@coreui/icons";
let router = useRouter();

onMounted(() => {
  console.log("onMount started");
  console.log("sign-up");
  console.log("onMount finished");
});
</script>

<template>
  <div class="min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Sign Up</h1>
                  <p class="text-medium-emphasis">Sign Up to create account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon :icon="cilUser" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autocomplete="username"
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
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon :icon="cilUser" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Full Name"
                      autocomplete="full-name"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4"> Sign Up</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
