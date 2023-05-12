<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toastification";
import { DateTime } from "luxon";
import { useAppStore } from "@/stores";
import type { Task } from "@/types";


let router = useRouter();
let toastService = useToast();

let appStore = useAppStore();
const { session } = storeToRefs(appStore);

const dateTime = DateTime.now();
const currentMonth = ref(dateTime.month);

function add() {
  router.push("/times/-/edit");
}

function edit(item: Task) {
  router.push(`/times/${item.id}/edit`);
}

function remove(item: Task) {
  appStore.removeTask(item.id);
  toastService.success("Removed successfully...");
}

function accept(item: Task) {
  toastService.warning("Coming soon...");
}

function acceptAll() {
  toastService.success("Coming soon...");
}

function download() {
  toastService.warning("Coming soon...");
}

const items = appStore.getTasks();

onMounted(() => {
  console.log("onMount started");
  console.log("times-list");
  console.log(items);
  console.log("onMount finished");
});
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
          <CFormSelect aria-label="Select Month" v-model="currentMonth">
            <option value="-">&lt; Select Month &gt;</option>
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
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">&nbsp;</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="(item, index) in items">
            <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
            <CTableDataCell>{{ item.description }}</CTableDataCell>
            <CTableDataCell>{{ item.startDateTimeText }}</CTableDataCell>
            <CTableDataCell class="text-uppercase">{{ item.status }}</CTableDataCell>
            <CTableDataCell>
              <span class="float-end">
                <CButton color="warning" variant="outline" shape="rounded-pill" @click="edit(item)">Edit</CButton>
                &nbsp;
                <CButton color="danger" variant="outline" shape="rounded-pill" @click="remove(item)">Delete</CButton>
                &nbsp;
                <CButton color="success" variant="outline" shape="rounded-pill" @click="accept(item)">Accept</CButton>
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
      <CButton class="float-end" color="info" variant="outline" shape="rounded-pill" @click="download()">
        Download As PDF
      </CButton>
      <CButton class="float-start" color="success" @click="acceptAll()">Accept All</CButton>
    </CCol>
  </CRow>
</template>
