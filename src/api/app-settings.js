import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAppSettingsApi = async () => {
  return axios.get(`${API_URL}/api/app-settings`);
};
