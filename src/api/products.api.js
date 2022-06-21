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
  async getProducts(page, store = getStore(), categorie, name) {
    return await axios.get(
      `${URL}products?page=${page}&storeId=${store}&categorie=${categorie}&name=${name}`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
  },
  async putProduct(data, id) {
    return await axios.put(`${URL}products/${id}`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getProductsStock() {
    return await axios.get(
      `${URL}products/stockMinimun`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
  },
  async getProductByCode(code){
    return await axios.get(`${URL}products/getCode?code=${code}`, {
      headers: {
        authorization: getToken(),
      },
    })
  }
};
