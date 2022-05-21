import axios from "axios";
import { URL } from "./constants";
import { getToken } from "./token.api";

export const getSales = (page = 1, take = 10) => {
  return axios.get(`${URL}sales?page=${page}&limit=${take}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getDetailsSale = (id) => {
  return axios.get(`${URL}detail-sales/sale/${id}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getSalesByBox = (page = 1, take = 10, id) => {
  return axios.get(`${URL}sales/box/${id}?page=${page}&limit=${take}`, {
    headers: {
      authorization: getToken(),
    },
  });
};
