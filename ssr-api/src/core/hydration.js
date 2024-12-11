export const serializeHydration = (route, state) => {
  return `
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(state)};
      window.__INITIAL_ROUTE__ = ${JSON.stringify(route)};
    </script>`;
};
