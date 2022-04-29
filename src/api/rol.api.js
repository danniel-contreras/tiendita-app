import axios from "axios";
import { URL } from "./constants";

export default {
  async addRole(data) {
    return await axios.post(`${URL}role`, data);
  },
  async getRoles() {
    return await axios.get(`${URL}roles?page=1&take=100`);
  },
  async putUser(data,id) {
    return await axios.put(`${URL}users/${id}`, data);
  },
  async deleteUser(id) {
    return await axios.delete(`${URL}users/${id}`);
  },
};
