export const isSSR = () => {
  if (typeof window === 'undefined') {
    return true;
  }
  return false;
};

export const hydrate = async (store, router) => {
  if (typeof window !== 'undefined') {
    if (window.__INITIAL_STATE__) {
      store.replaceState(window.__INITIAL_STATE__);
    }
    if (window.__INITIAL_ROUTE__) {
      router.push({ name: window.__INITIAL_ROUTE__ });
      await router.isReady();
    }
  }
};
