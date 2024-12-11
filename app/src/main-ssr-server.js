import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';
import { deepMerge } from './modules/utils/store';

export async function render(route, initialState) {
  const { app, router, store } = await createApp();
  store.replaceState(deepMerge(store.state, initialState));
  router.push({ name: route });
  await router.isReady();
  const html = await renderToString(app, {});
  return { html };
}
