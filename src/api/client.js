/* eslint-disable no-param-reassign */
import axios from "axios";
import { HOSTED_URL, TOKEN } from "../constants";

const resolve_accessToken = () => localStorage.getItem(TOKEN) || "";

// eslint-disable-next-line import/prefer-default-export
export const axiosClient = axios.create({
  baseURL: HOSTED_URL,
});

axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization = resolve_accessToken();
  return config;
});

// eslint-disable-next-line import/prefer-default-export
export async function resolver(axiosResponse) {
  try {
    const response = await axiosResponse;

    if (response?.status === 200 || response?.status === 201) {
      return response;
    }
    return new Error("Error");
  } catch (e) {
    return new Error("Error");
  }
}
