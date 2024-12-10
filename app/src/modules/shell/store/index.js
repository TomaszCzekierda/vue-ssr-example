import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import shellTypes from './types';

export { shellTypes };

export default {
  namespaced: true,
  namespace: shellTypes.namespace,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};
