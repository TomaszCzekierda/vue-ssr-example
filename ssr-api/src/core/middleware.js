export const getAppState = () => {
  return {
    route: 'start',
    state: {
      shell: {
        menu: [
          {
            label: 'Start',
            href: 'start',
          },
          {
            label: 'About',
            href: 'about',
          },
        ],
      },
      start: {
        total: 5,
      },
    },
  };
};
