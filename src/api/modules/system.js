import { axiosClient, resolver } from "../client";

export default {
  async getAllDesktopUsers() {
    return resolver(await axiosClient.get("user/alluser/desktop"));
  },
  async getAllMobileUsers() {
    return resolver(await axiosClient.get("user/alluser/mobile"));
  },
  async getAllIntrusionCount() {
    return resolver(await axiosClient.get("intrusion/all/count"));
  },
  async sendNotification(data) {
    return resolver(await axiosClient.post("cctv/notification/test", data));
  },
  async getAllUsersWithDetails() {
    return resolver(await axiosClient.get("user/alluser/details"));
  },
};
