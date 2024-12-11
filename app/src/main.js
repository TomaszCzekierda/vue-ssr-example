import { createSSRApp, createApp as vueCreateApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import { isSSR, hydrate } from './modules/utils/ssr';

export function createApp() {
  const app = isSSR() ? createSSRApp(App) : vueCreateApp(App);
  app.use(router);
  app.use(store);
  return { app, router, store };
}

if (!isSSR()) {
  (async () => {
    const { app, store, router } = createApp();
    await hydrate(store, router);
    app.mount('#app');
  })();
}
