import { _types } from './types';

export default {
  [_types.mutations.INITIALIZE]: (state) => {
    state.menu = [
      {
        label: 'Start',
        href: 'start',
      },
      {
        label: 'About',
        href: 'about',
      },
    ];
  },
};
