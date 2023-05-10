import { BaseService } from "@/services/base-service";

class AppService extends BaseService {
  fetchData() {
    const path = "/app-data.json";
    return this.http.get(path);
  }

}

export const appService = new AppService();
