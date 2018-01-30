import api from '@/api';
import authLib from '@/libs/auth-lib';
import SET_TOKEN from './types';

export default {
  state: {
    token: '',
  },
  actions: {
    exchangeForToken({ commit }, code) {
      api.getToken(code)
        .then(({ data }) => commit(SET_TOKEN, data.token));
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = { ...token };
      authLib.setToken(token);
    },
  },
};
