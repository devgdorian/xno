import axios from "axios";

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  stateUser: (state) => state.user,
};

const actions = {
  async Register(form) {
    await axios.post("auth/register", form);
  },
  async Login({ commit }, User) {
    await axios.post("auth/login", User);
    await commit("setUser", User.username);
    console.log(User)
  },
  async Logout({ commit }) {
    let user = null;
    commit("Logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  Logout(state) {
    state.user = null;
    state.posts = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
