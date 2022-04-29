import axios from "axios";
import { URL } from "./constants";

export default {
  async addUser(data) {
    return await axios.post(`${URL}users`, data);
  },
  async getUsers(page) {
    return await axios.get(`${URL}users?page=${page}&storeId=1`);
  },
  async putUser(data,id) {
    return await axios.put(`${URL}users/${id}`, data);
  },
  async deleteUser(id) {
    return await axios.delete(`${URL}users/${id}`);
  },
};
