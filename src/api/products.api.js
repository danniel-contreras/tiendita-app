import axios from "axios";
import { URL } from "./constants";

export default {
  async addProduct(data) {
    return await axios.post(`${URL}products`, data);
  },
  async getProducts(page) {
    return await axios.get(`${URL}products?page=${page}&storeId=1`);
  },
};
