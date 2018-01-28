import { SET_USER, CLEAN_USER, SET_USER_REPOS } from './types';

export default {
  state: {
    user: {
      id: 0,
      repos: [],
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit(SET_USER, user);
    },
    cleanUser({ commit }) {
      commit(CLEAN_USER);
    },
    setUserRepos({ commit }, repos) {
      commit(SET_USER_REPOS, repos);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = Object.assign({}, user);
    },
    cleanUser(state) {
      state.user = Object.assign({}, { id: 0 });
    },
    setUserRepos(state, repos) {
      state.user.repos = Object.assign({}, repos);
    },
  },
};
