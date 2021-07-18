import axios from "axios";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const USER_REQUEST = "USER_REQUEST";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  authStatus: (state) => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in login
      commit(AUTH_REQUEST);
      axios({ url: "auth/login", data: user, method: "POST" })
        .then((resp) => {
          const token = resp.data.token;
          localStorage.setItem("user-token", token); // store the token in localstorage
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          commit(AUTH_SUCCESS, token);
          // you have your token, now log in your user :)
          dispatch(USER_REQUEST);
          resolve(resp);
        })
        .catch((err) => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
          reject(err);
        });
    });
  },
  [REGISTER_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in login
      commit(REGISTER_REQUEST);
      axios({ url: "auth/register", data: user, method: "POST" })
        .then((resp) => {
          commit(REGISTER_SUCCESS);
          resolve(resp);
        })
        .catch((err) => {
          commit(REGISTER_ERROR, err);
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve) => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token"); // clear your user's token from localstorage
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  },
  [USER_REQUEST]: () => {},
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = "authenticating";
  },
  [REGISTER_REQUEST]: (state) => {
    state.status = "registering";
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = "authenticated";
    state.token = token;
  },
  [REGISTER_SUCCESS]: (state) => {
    state.status = "registered";
  },
  [AUTH_ERROR]: (state) => {
    state.status = "auth error";
  },
  [REGISTER_ERROR]: (state) => {
    state.status = "register error";
  },
  [AUTH_LOGOUT]: (state) => {
    state.status = "logged out";
    state.token = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
