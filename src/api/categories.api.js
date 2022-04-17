import axios from "axios";
import { URL } from "./constants";

export default {
  async addCategorie(data) {
    return await axios.post(`${URL}categories`, data);
  },
  async getCategories(page){
      return await axios.get(`${URL}categories?page=${page}`)
  }
};
