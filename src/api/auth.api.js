import axios from "axios";
import { URL } from "./constants";

export default {
  async login(data) {
    return await axios.post(`${URL}auth/login`, data);
  }
};