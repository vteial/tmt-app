<script setup lang="ts">
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

let router = useRouter();
let toastService = useToast();

function cancel() {
  router.push("/times");
}

function save() {
  toastService.info("Coming soon...");
  router.push("/times");
}

</script>

<template>
  <CRow>
    <CCol>
      <CButton color="info" variant="outline" @click="cancel()">Cancel</CButton>
      <CButton color="primary" @click="save()" class="float-end">Save</CButton>
    </CCol>
  </CRow>
  <hr />
  <CCard>
    <CCardBody>
      <CForm class="row g-3">
        <CCol md="4">
          <CFormLabel for="taskDay">Day Of Month</CFormLabel>
          <CFormInput type="number" id="taskDay"/>
        </CCol>
        <CCol md="4">
          <CFormLabel for="taskMonth">Month</CFormLabel>
          <CFormInput type="number" id="taskDay" readonly disabled/>
        </CCol>
        <CCol md="4">
          <CFormLabel for="taskYear">Year</CFormLabel>
          <CFormInput type="number" id="taskYear" readonly disabled/>
        </CCol>
        <CCol xs="12">
          <CFormLabel for="taskDescription">Description</CFormLabel>
          <CFormInput id="taskDescription" placeholder="Description" />
        </CCol>
      </CForm>
    </CCardBody>
  </CCard>
  <hr />
  <CRow>
    <CCol>
      <CButton color="info" variant="outline" @click="cancel()">Cancel</CButton>
      <CButton color="primary" @click="save()" class="float-end">Save</CButton>
    </CCol>
  </CRow>
  <!--
  <CRow>
    <CCol>&nbsp;</CCol>
    <CCol class="text-center">
      <div class="d-grid">
        <CButton color="primary" @click="save()">Save</CButton>
      </div>
    </CCol>
    <CCol>&nbsp;</CCol>
  </CRow>
  -->
</template>