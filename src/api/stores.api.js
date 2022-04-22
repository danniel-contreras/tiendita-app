import axios from "axios";
import { URL } from "./constants";

export default {
  async addStore(data) {
    return await axios.post(`${URL}stores`, data);
  },
  async getStores(page,take=5) {
    return await axios.get(`${URL}stores?page=${page}&take=${take}`);
  },
  async putStore(data,id) {
    return await axios.put(`${URL}stores/${id}`, data);
  },
  async deleteStore(id) {
    return await axios.delete(`${URL}stores/${id}`);
  },
};
