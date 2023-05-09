import { ref } from "vue";
import { defineStore } from "pinia";

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
    userId: "-",
    password: "",
    name: "",
    status: ""
  });

  const users = ref([
    {
      userId: "userone@gmail.com",
      password: "pass",
      name: "User One",
      status: "active"
    }
  ]);

  return {
    sideBar,
    toggleSideBarVisibility,
    toggleSideBarCollapse,
    session,
    users
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