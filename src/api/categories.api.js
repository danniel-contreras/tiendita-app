import axios from "axios";
import { URL } from "./constants";

export default {
  async addCategorie(data) {
    return await axios.post(`${URL}categories`, data);
  },
  async getCategories(page,take=5){
      return await axios.get(`${URL}categories?page=${page}&take=${take}`)
  },
  async putCategorie(data,id) {
    return await axios.put(`${URL}categories/${id}`, data);
  },
  async deleteCategorie(id) {
    return await axios.post(`${URL}categories/${id}`);
  },
};
