import { createRouter, createWebHashHistory, createWebHistory, createMemoryHistory } from 'vue-router';

import StartPage from '../modules/start/components/pages/StartPage.vue';
import AboutPage from '../modules/about/components/pages/AboutPage.vue';

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});
