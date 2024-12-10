import { _types } from './types';
export default {
  [_types.actions.INITIALIZE]: (context) => {
    if (!context.state.menu) {
      context.commit(_types.mutations.INITIALIZE);
    }
  },
};
