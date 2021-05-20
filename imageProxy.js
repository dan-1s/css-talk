/**
 * To simulate slow connection when fetching images
 */

const express = require('express');
const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  const { delay } = req.query;
  setTimeout(next, delay || 0);
});
app.use(express.static('public/images'));

app.listen(PORT, () => {
  console.log(
    '\x1b[32m%s\x1b[0m',
    'Image delay proxy started 🐢 \n\n',
    `- Local:     http://localhost:${PORT}`
  );
});
