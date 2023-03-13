const express = require('express');
const loginRouter = require('./login.routes');
function routerApi(app) {
    const router = express.Router();
  app.use('/api/v1', router);
    router.use('/auth', loginRouter)
} 

module.exports = routerApi;