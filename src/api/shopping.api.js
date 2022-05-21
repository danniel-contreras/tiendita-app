import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export const saveShopping = (data) => {
  return axios.post(`${URL}shopping`, data, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getShopping = (page) => {
  return axios.get(`${URL}shopping?page=${page}&limit=5`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getDetailsByShopping = (id) => {
  return axios.get(`${URL}detail-shopping/shopping/${id}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getShoppingByBox = (page = 1, take = 10, id) => {
  return axios.get(`${URL}shopping/box/${id}?page=${page}&limit=${take}`, {
    headers: {
      authorization: getToken(),
    },
  });
};
