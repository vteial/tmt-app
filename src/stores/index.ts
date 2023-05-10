import { ref } from "vue";
import { defineStore } from "pinia";
import type { Organization } from "@/types";
import { appService } from "@/services/app-service";

export const useAppStore = defineStore("appStore", () => {

  const sideBar = ref({
    visible: true,
    collapse: false
  });

  function toggleSideBarVisibility() {
    sideBar.value.visible = !sideBar.value.visible;
  }

  function toggleSideBarCollapse() {
    sideBar.value.collapse = !sideBar.value.collapse;
  }

  const session = ref({
    userId: '-',
    password: '',
    name: '',
    role: '-',
    organization: '-'
  });


  async function init(callBack?: Function) {
    appService.fetchData().then((res) => {
      // console.log(res);
      orgs.value = res.data;
      console.log(orgs.value);
      if (callBack) callBack();
    });
  }

  function getOrganizations() {
    const items = [] as Organization[];
    orgs.value.forEach((item) => {
      // @ts-ignore
      items.push({ id: item.id, name: item.name } as Organization);
    });
    return items;
  }

  const orgs = ref([]);

  return {
    sideBar,
    toggleSideBarVisibility,
    toggleSideBarCollapse,
    session,
    init,
    getOrganizations,
    orgs,
  };
});

/*
import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
*/