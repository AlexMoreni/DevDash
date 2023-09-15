const express = require("express");
const cors = require("cors");
const db = require("./conn");

const app = express();
const Users = require("./models/Users");
const Notes = require("./models/Notes");

const UsersRoutes = require("./routes/UsersRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/users", UsersRoutes);

db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
