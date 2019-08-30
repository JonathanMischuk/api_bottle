const express = require('express');

const middleware = require('./middleware');
const routes = require('./api/routes');
const app = express();

middleware(app);
routes(app);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port ${server.address().port}!`);
});
