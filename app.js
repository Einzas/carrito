const { sequelize } = require("./src/config/database");
const express = require("express");
const cors = require("cors");
const routerApi = require("./src/routes/index");
const app = express();
const port = process.env.PORT ; 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routerApi(app);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Database connected");
  });
  console.log(`Example app listening at http://localhost:${port}`);
});
