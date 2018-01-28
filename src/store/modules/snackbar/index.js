import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './types';

export default {
  state: {
    snackBar: {
      isVisible: false,
      message: '',
    },
  },
  actions: {
    openSnackBar({ commit }, message) {
      commit(OPEN_SNACKBAR, message);
    },
    closeSnackBar({ commit }) {
      commit(CLOSE_SNACKBAR);
    },
  },
  mutations: {
    openSnackBar(state, message) {
      const snackBarClone = Object.assign({}, { isVisible: true, message });
      state.snackBar = snackBarClone;
    },
    closeSnackBar(state) {
      const snackBarClone = Object.assign({}, { isVisible: false, message: '' });
      state.snackBar = snackBarClone;
    },
  },
};
