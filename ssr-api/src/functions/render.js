import fs from 'node:fs/promises';
import { app } from '@azure/functions';
import { getAppState } from '../core/middleware.js';
app.http('render', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (req, context) => {
    try {
      const template = await fs.readFile('./dist/clientssr/index.html', 'utf-8');
      const render = (await import('../../dist/serverssr/main-ssr-server.js')).render;
      const { route, state } = getAppState();
      const rendered = await render(route, state);
      const html = template.replace(`<!--app-head-->`, rendered.head ?? '').replace(`<!--app-html-->`, rendered.html ?? '');
      return {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
        body: html,
      };
    } catch (error) {
      console.error('Error during SSR:', error);
      return { status: 500, body: 'Server Error' };
    }
  },
});
