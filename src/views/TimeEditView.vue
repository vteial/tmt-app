<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { DateTime } from "luxon";
import type { Task } from "@/types";
import { useAppStore } from "@/stores";

let router = useRouter();
let route = useRoute();
let toastService = useToast();
let appStore = useAppStore();

let dateTime = DateTime.now();
let item = ref({
  id: "-",
  day: dateTime.day,
  month: dateTime.month,
  monthText: dateTime.monthLong,
  year: dateTime.year,
  description: "",
  status: "Pending"
});

function cancel() {
  router.push("/times");
}

function save() {
  if (item.value.description.trim() === "") {
    toastService.error("Provide valid description");
    return;
  }

  const task = {
    id: item.value.id,
    description: item.value.description,
    status: item.value.status
  } as Task;
  dateTime = dateTime.set({
    day: item.value.day,
    month: item.value.month,
    year: item.value.year
  });
  task.startDateTime = dateTime.toMillis();
  task.endDateTime = dateTime.toMillis();
  task.startDateTimeText = dateTime.toLocaleString(DateTime.DATE_MED);
  task.endDateTimeText = task.startDateTimeText;

  appStore.saveTask(task);
  toastService.success("Saved successfully...");
  router.push("/times");
}

onMounted(() => {
  console.log("onMount started");
  console.log("time-edit");
  if (route.params.id && route.params.id !== "-") {
    const task = appStore.getTaskById(route.params.id.toString());
    console.log(task);
    if (task) {
      dateTime = DateTime.fromMillis(task.startDateTime);
      item.value.day = dateTime.day;
      item.value.month = dateTime.month;
      item.value.monthText = dateTime.monthLong;
      item.value.year = dateTime.year;
      item.value.description = task.description;
      item.value.status = task.status;
      item.value.id = task.id;
    }
  }
  console.log("onMount finished");
});

</script>

<template>
  <CRow>
    <CCol class="text-center">
      <CButton color="info" variant="outline" class="float-start" @click="cancel()">Cancel</CButton>
      <span class="h4">Id: {{item.id}}</span>
      <CButton color="primary" class="float-end" @click="save()" >Save</CButton>
    </CCol>
  </CRow>
  <hr />
  <CCard>
    <CCardBody>
      <CForm class="row g-3">
        <CCol md="4">
          <CFormLabel for="taskDay">Day Of Month</CFormLabel>
          <CFormInput type="number" id="taskDay" v-model="item.day" />
        </CCol>
        <CCol md="4">
          <CFormLabel for="taskMonth">Month</CFormLabel>
          <CFormInput type="text" id="taskDay" v-model="item.monthText" readonly disabled />
        </CCol>
        <CCol md="4">
          <CFormLabel for="taskYear">Year</CFormLabel>
          <CFormInput type="number" id="taskYear" v-model="item.year" readonly disabled />
        </CCol>
        <CCol xs="12">
          <CFormLabel for="taskDescription">Description</CFormLabel>
          <CFormInput id="taskDescription" v-model="item.description" placeholder="Description" />
        </CCol>
      </CForm>
    </CCardBody>
  </CCard>
  <hr />
  <CRow>
    <CCol class="text-center">
      <CButton color="info" variant="outline" class="float-start" @click="cancel()">Cancel</CButton>
      <span class="h4">
        Status: <span class="text-uppercase">{{item.status}}</span>
      </span>
      <CButton color="primary" class="float-end" @click="save()">Save</CButton>
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