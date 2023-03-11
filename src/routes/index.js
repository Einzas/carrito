const express = require('express');
function routerApi(app) {
    const router = express.Router();
  app.use('/api/v1', router);
    router.get('/', (req, res) => {
        res.send('Hello World!');
    });
}

module.exports = routerApi;