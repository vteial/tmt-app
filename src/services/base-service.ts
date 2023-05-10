// @ts-ignore
import type { AxiosInstance } from "axios";
// @ts-ignore
import { $axios } from "@baloise/vue-axios";

export abstract class BaseService {
  protected apiPrefix = '';
  protected http: AxiosInstance;

  constructor() {
    // const apiHost = import.meta.env.VITE_APP_API_HOST;
    // this.apiPrefix = apiHost + "/api";
    this.http = $axios.create({
      baseURL: this.apiPrefix,
    });
    // this.http.interceptors.request.use(
    //   async (config) => {
    //     // @ts-ignore
    //     const accessToken = window.session.value.accessToken;
    //     // console.log("AccessToken: " + accessToken);
    //     config.headers["Authorization"] = `Bearer ${accessToken}`;
    //     return config;
    //   },
    //   (error) => {
    //     Promise.reject(error);
    //   }
    // );
  }

  getApiPrefix(): string {
    return this.apiPrefix;
  }
}
