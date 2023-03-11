const express = require('express');
const routerApi = require('./src/routes/index');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routerApi(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });
