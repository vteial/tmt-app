<script setup lang="ts">
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

let router = useRouter();
let toastService = useToast();

function add() {
  router.push("/times/-/edit");
}

function edit() {
  router.push("/times/-/edit");
}

function remove() {
  toastService.warning("Coming soon...");
}

function accept() {
  toastService.success("Coming soon...");
}

function acceptAll() {
  toastService.success("Coming soon...");
}

function download() {
  toastService.info("Coming soon...");
}

</script>

<template>
  <CRow>
    <CCol md="8">
      <CRow>
        <CCol>
          <span class="h3">Year:&nbsp;&nbsp;</span>
          <span class="h3">2023</span>
        </CCol>
        <CCol>
          <CFormSelect aria-label="Select Month">
            <option>&lt; Select Month &gt;</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </CFormSelect>
        </CCol>
      </CRow>
    </CCol>
    <CCol md="4">
      <CButton class="float-end" color="info" @click="add()">Add</CButton>
    </CCol>
  </CRow>
  <hr />
  <CCard>
    <CCardBody>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Datetime</CTableHeaderCell>
            <CTableHeaderCell scope="col">&nbsp;</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Task Two</CTableDataCell>
            <CTableDataCell>11-05-2023</CTableDataCell>
            <CTableDataCell>
              <span class="float-end">
                <CButton color="warning" variant="outline" shape="rounded-pill" @click="edit()">Edit</CButton>
                &nbsp;
                <CButton color="danger" variant="outline" shape="rounded-pill" @click="remove()">Delete</CButton>
                &nbsp;
                <CButton color="success" variant="outline" shape="rounded-pill" @click="accept()">Accept</CButton>
              </span>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Task One</CTableDataCell>
            <CTableDataCell>10-05-2023</CTableDataCell>
            <CTableDataCell>
              <span class="float-end">
                <CButton color="warning" variant="outline" shape="rounded-pill" @click="edit()">Edit</CButton>
                &nbsp;
                <CButton color="danger" variant="outline" shape="rounded-pill" @click="remove()">Delete</CButton>
                &nbsp;
                <CButton color="success" variant="outline" shape="rounded-pill" @click="accept()">Accept</CButton>
              </span>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
  <hr>
  <CRow>
    <CCol>
      <CButton class="float-start" color="info" variant="outline" shape="rounded-pill" @click="download()">Download As PDF</CButton>
      <CButton class="float-end" color="success" @click="acceptAll()">Accept All</CButton>
    </CCol>
  </CRow>
</template>
