import { _types } from './types';

export default {
  [_types.mutations.ADD]: (state) => {
    state.total = state.total + 1;
  },
};
