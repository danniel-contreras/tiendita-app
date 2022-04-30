import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export default {
  async addRole(data) {
    return await axios.post(`${URL}role`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getRoles() {
    return await axios.get(`${URL}roles?page=1&take=100`, {
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
