import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export default {
  async addCategorie(data) {
    return await axios.post(`${URL}categories`, data,{
      headers: {
        authorization: getToken(),
      },
    });
  },
  async getCategories(page, take = 5) {
    return await axios.get(`${URL}categories?page=${page}&take=${take}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async putCategorie(data, id) {
    return await axios.put(`${URL}categories/${id}`, data, {
      headers: {
        authorization: getToken(),
      },
    });
  },
  async deleteCategorie(id) {
    return await axios.post(`${URL}categories/${id}`, {
      headers: {
        authorization: getToken(),
      },
    });
  },
};
