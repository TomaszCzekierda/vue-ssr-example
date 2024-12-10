import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import startTypes from './types';

export { startTypes };

export default {
  namespaced: true,
  namespace: startTypes.namespace,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};
