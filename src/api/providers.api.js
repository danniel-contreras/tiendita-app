import axios from "axios";
import { URL } from "./constants";

export default {
  async addStore(data) {
    return await axios.post(`${URL}providers`, data);
  },
  async getStores(page) {
    return await axios.get(`${URL}providers?page=${page}`);
  },
};
