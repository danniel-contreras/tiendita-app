import axios from "axios";
import { URL } from "./constants";

export default {
  async addProvider(data) {
    return await axios.post(`${URL}providers`, data);
  },
  async getProviders(page) {
    return await axios.get(`${URL}providers?page=${page}`);
  },
};
