import { createStore } from "vuex";
import { isUserLoggedApi, getToken, decodeToken,removeToken } from "../api/token.api";

const token = getToken();
const data = {
  isauth: isUserLoggedApi(),
  user: isUserLoggedApi() ? decodeToken(token) : undefined,
};

const store = createStore({
  state() {
    return data;
  },
  actions: {
    setAuth({ commit }, auth) {
      commit("SET_AUTH", auth);
    },
    setLoggout({ commit }) {
      removeToken()
      commit("SET_LOGGOUT");
    },
  },
  mutations: {
    SET_AUTH: (state, auth) => {
      state.isauth = auth.state;
      state.user = auth.data;
    },
    SET_LOGGOUT: (state) => {
      state.isauth = false;
      state.user = undefined;
    },
  },
});

export default store;