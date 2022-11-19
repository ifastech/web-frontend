import { axiosClient, resolver } from "../client";

export default {
  async signinUser(data) {
    return resolver(await axiosClient.post("user/login", data));
  },
};
