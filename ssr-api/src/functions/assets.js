import { app } from '@azure/functions';
import fs from 'fs';
import path from 'path';

app.http('assets', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'assets/{file}',
  handler: async (req, context) => {
    const fileName = req.params.file;
    const filePath = path.join('./dist/clientssr/assets', fileName);
    if (!fs.existsSync(filePath)) {
      return {
        status: 404,
        body: 'File not found',
      };
    }
    const fileContent = fs.readFileSync(filePath);

    return {
      status: 200,
      body: fileContent,
      headers: {
        'Content-Type': getContentType(fileName),
      },
    };
  },
});

function getContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case '.js':
      return 'application/javascript';
    case '.css':
      return 'text/css';
    case '.html':
      return 'text/html';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream'; // Default binary type
  }
}
