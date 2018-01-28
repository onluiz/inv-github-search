import router from '@/router';
import {
  SET_USER,
  CLEAN_USER,
  SET_USER_REPOS,
  NEXT_REPO_PAGE,
  PREVIOUS_REPO_PAGE,
} from './types';

const octokit = require('@octokit/rest')();

export default {
  state: {
    user: {
      id: 0,
      repos: [],
      found: false,
    },
    reposPages: {
      per_page: 5,
      page: 1,
    },
  },
  actions: {
    setUser({ commit }, searchText) {
      octokit.users.getForUser({ username: searchText })
        .then(({ data }) => {
          commit(SET_USER, data);
        })
        .catch(() => {
          router.push('/404');
        });
    },
    cleanUser({ commit }) {
      commit(CLEAN_USER);
    },
    setUserRepos({ commit, state }) {
      octokit.repos.getForUser({
        username: state.user.login,
        per_page: state.reposPages.per_page,
        page: state.reposPages.page,
      })
        .then(({ data }) => {
          const reposClone = [...state.user.repos];
          commit(SET_USER_REPOS, reposClone.concat(data));
        })
        .catch(() => {
          commit('snackBar', 'Nenhum repositório encontrado.');
        });
    },
    nextReposPage({ dispatch, commit }) {
      commit(NEXT_REPO_PAGE);
      dispatch(SET_USER_REPOS);
    },
    previousReposPage({ dispatch, commit }) {
      commit(PREVIOUS_REPO_PAGE);
      dispatch(SET_USER_REPOS);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user, repos: [] };
    },
    cleanUser(state) {
      state.user = { id: 0, repos: [] };
    },
    setUserRepos(state, repos) {
      state.user.repos = [...repos];
    },
    nextReposPage(state) {
      state.reposPages = { ...state.reposPages, page: state.reposPages.page + 1 };
    },
    previousReposPage(state) {
      if (state.reposPages > 1) {
        state.reposPages = { ...state.reposPages, page: state.reposPages.page - 1 };
      }
    },
  },
};
