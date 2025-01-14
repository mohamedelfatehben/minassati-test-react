import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getCoursesApi = async () => {
  return axios.get(`${API_URL}/api/courses`);
};
export const getCourseDetailsApi = async (id) => {
  return axios.get(`${API_URL}/api/course/${id}`);
};
