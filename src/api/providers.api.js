import axios from "axios";
import { URL } from "./constants";

export default {
  async addProvider(data) {
    return await axios.post(`${URL}providers`, data);
  },
  async getProviders(page) {
    return await axios.get(`${URL}providers?page=${page}`);
  },
  async putProvider(data,id) {
    return await axios.put(`${URL}providers/${id}`, data);
  },
  async deleteProvider(id) {
    return await axios.delete(`${URL}providers/${id}`);
  },
};
