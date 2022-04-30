import axios from "axios";
import { URL } from "./constants";
import { getToken,getStore } from "./token.api";

export default {
  async addUser(data) {
    return await axios.post(`${URL}users`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getUsers(page) {
    return await axios.get(`${URL}users?page=${page}&storeId=${getStore()}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async putUser(data, id) {
    return await axios.put(`${URL}users/${id}`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async deleteUser(id) {
    return await axios.delete(`${URL}users/${id}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
};
