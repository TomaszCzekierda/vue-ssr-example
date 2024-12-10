import { app } from '@azure/functions';

app.http('HealthCheck', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'HealthCheck',
  handler: async (req, context) => {
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(true),
    };
  },
});
