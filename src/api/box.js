import axios from "axios";
import { URL } from "./constants";
import { getToken, getStore } from "./token.api";

export const saveBox = (box) => {
  localStorage.setItem("box", box);
};

export const getBox = () => {
  return localStorage.getItem("box");
};

export const deleteBox = () => {
  localStorage.removeItem("box");
};

export const addBox = (data) => {
  return axios.post(`${URL}box`, data, {
    headers: {
      authorization: getToken(),
    },
  });
};
export const getOpen = () => {
  return axios.get(`${URL}box/opened?storeId=${getStore()}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getAllBoxes = (page,dates) => {
  return axios.get(`${URL}box?page=${page}&storeId=${getStore()}&dates=${dates}`, {
    headers: {
      authorization: getToken(),
    },
  });
};

export const getById = (id) => {
  return axios.get(`${URL}box/${id}`, {
    headers: {
      authorization: getToken(),
    },
  });
};
