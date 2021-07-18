import axios from "axios";

export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
export const SIGNOFF_REQUEST = "SIGNOFF_REQUEST";
export const SIGNOFF_SUCCESS = "SIGNOFF_SUCCESS";
export const USER_REQUEST = "USER_REQUEST";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

const state = {
  token: localStorage.getItem("user-token") || "",
  status: "guest",
  // TODO username:
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  authStatus: (state) => state.status,
};

const actions = {
  [SIGNIN_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in signin
      commit(SIGNIN_REQUEST);
      axios({ url: "auth/signin", data: user, method: "POST" })
        .then((resp) => {
          const token = resp.data.token;
          localStorage.setItem("user-token", token); // store the token in localstorage
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          commit(SIGNIN_SUCCESS, token);
          // you have your token, now log in your user :)
          dispatch(USER_REQUEST);
          resolve(resp);
        })
        .catch((err) => {
          commit(SIGNIN_ERROR, err);
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
          reject(err);
        });
    });
  },
  [SIGNUP_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in signin
      commit(SIGNUP_REQUEST);
      axios({ url: "auth/signup", data: user, method: "POST" })
        .then((resp) => {
          commit(SIGNUP_SUCCESS);
          resolve(resp);
        })
        .catch((err) => {
          commit(SIGNUP_ERROR, err);
          reject(err);
        });
    });
  },
  [SIGNOFF_REQUEST]: ({ commit }) => {
    return new Promise((resolve) => {
      commit(SIGNOFF_REQUEST);
      localStorage.removeItem("user-token"); // clear your user's token from localstorage
      delete axios.defaults.headers.common["Authorization"];
      commit(SIGNOFF_SUCCESS);
      resolve();
    });
  },
  [USER_REQUEST]: () => {},
};

const mutations = {
  [SIGNIN_REQUEST]: (state) => {
    state.status = "signing in";
  },
  [SIGNUP_REQUEST]: (state) => {
    state.status = "signing up";
  },
  [SIGNIN_SUCCESS]: (state, token) => {
    state.status = "signed in";
    state.token = token;
  },
  [SIGNUP_SUCCESS]: (state) => {
    state.status = "signed up";
  },
  [SIGNIN_ERROR]: (state) => {
    state.status = "sign in error";
  },
  [SIGNUP_ERROR]: (state) => {
    state.status = "sign up error";
  },
  [SIGNOFF_REQUEST]: (state) => {
    state.status = "signing off";
    state.token = "";
  },
  [SIGNOFF_SUCCESS]: (state) => {
    state.status = "signed off";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
