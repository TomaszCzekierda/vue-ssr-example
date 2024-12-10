import { _types } from './types';
export default {
  [_types.actions.ADD]: (context) => {
    context.commit(_types.mutations.ADD);
  },
};
