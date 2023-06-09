import { ref } from "vue";
import { defineStore } from "pinia";
import { uid } from "radash";
import type { Organization, Session, Task } from "@/types";
import { appService } from "@/services/app-service";
import { useAuth0 } from "@auth0/auth0-vue";


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
  const auth0 = useAuth0();

  const isAuthIsProgress = auth0.isLoading;
  const isAuthenticated = auth0.isAuthenticated;

  const session = ref({
    accessToken: "-",
    userId: "-",
    password: "",
    name: "",
    role: "-",
    orgId: "-",
    orgName: "-"
  } as Session);

  function init() {
    console.log("isProgress: " + isAuthIsProgress.value + " isSignedIn: " + isAuthenticated.value);
    const flag = (!isAuthIsProgress.value && isAuthenticated.value);
    console.log(`flag : ${flag}`);
    if(!flag) return;
      auth0.getAccessTokenSilently().then((res) => {
        console.log(res);
        console.log(auth0.user.value);
        // @ts-ignore
        session.value.accessToken = res;
        // @ts-ignore
        session.value.userId = auth0.user.value.email;
        // @ts-ignore
        session.value.name = auth0.user.value.name;
        console.log(session);
      });
  }

  function signIn() {
    auth0.loginWithRedirect();
  }

  function signOut() {
    session.value.userId = '-';
    auth0.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }



  async function initx(callBack?: Function) {
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

  const orgs = ref([] as Organization[]);

  // Task CRUD
  function createUniqueId() {
    return uid(8);
  }

  function getSessionUserFromStorage() {
    const org = orgs.value.find(item => item.id === session.value.orgId);
    const user = org?.users.find(item => item.userId === session.value.userId);
    // @ts-ignore
    if (!user.tasks) {
      // @ts-ignore
      user.tasks = [] as Task[];
    }
    return user;
  }

  function getTasks() {
    const user = getSessionUserFromStorage();
    // @ts-ignore
    return user.tasks;
  }

  function getTaskById(id: string) {
    const user = getSessionUserFromStorage();
    // @ts-ignore
    return user.tasks.find(item => item.id === id);
  }

  function saveTask(item: Task) {
    const user = getSessionUserFromStorage();
    let task: Task;
    if (item.id === "-") {
      task = {
        id: createUniqueId(),
        status: "pending"
      } as Task;
      // @ts-ignore
      user.tasks.push(task);
    } else {
      // @ts-ignore
      task = user.tasks.find(o => o.id == item.id);
    }
    task.startDateTime = item.startDateTime;
    task.startDateTimeText = item.startDateTimeText;
    task.endDateTime = item.endDateTime;
    task.endDateTimeText = item.endDateTimeText;
    task.description = item.description;
  }

  function removeTask(id: string) {
    const user = getSessionUserFromStorage();
    // @ts-ignore
    const index = user.tasks.findIndex(item => item.id == id);
    if (index > -1) {
      // @ts-ignore
      user.tasks.splice(index, 1);
    }
  }

  return {
    sideBar,
    toggleSideBarVisibility,
    toggleSideBarCollapse,
    isAuthIsProgress,
    isAuthenticated,
    session,

    orgs,
    init,
    signIn,
    signOut,
    getOrganizations,
    getTasks,
    getTaskById,
    saveTask,
    removeTask
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