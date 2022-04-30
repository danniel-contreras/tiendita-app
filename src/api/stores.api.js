import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export default {
  async addStore(data) {
    return await axios.post(`${URL}stores`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getStores(page, take = 5) {
    return await axios.get(`${URL}stores?page=${page}&take=${take}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async putStore(data, id) {
    return await axios.put(`${URL}stores/${id}`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async deleteStore(id) {
    return await axios.delete(`${URL}stores/${id}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
};
