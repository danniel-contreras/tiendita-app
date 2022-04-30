import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export default {
  async addProvider(data) {
    return await axios.post(`${URL}providers`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getProviders(page) {
    return await axios.get(`${URL}providers?page=${page}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async putProvider(data, id) {
    return await axios.put(`${URL}providers/${id}`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async deleteProvider(id) {
    return await axios.delete(`${URL}providers/${id}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
};
