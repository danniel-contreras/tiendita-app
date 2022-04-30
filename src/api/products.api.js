import axios from "axios";
import { URL } from "./constants";
import { getToken, getStore } from "./token.api";

export default {
  async addProduct(data) {
    return await axios.post(`${URL}products`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getProducts(page) {
    return await axios.get(
      `${URL}products?page=${page}&storeId=${getStore()}`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
  },
};
