import { createStore } from 'vuex';
import shellStore from '../modules/shell/store';
import startStore from '../modules/start/store';

export default createStore({
  modules: {
    [shellStore.namespace]: shellStore,
    [startStore.namespace]: startStore,
  },
});
