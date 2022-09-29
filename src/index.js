const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const route = require("./routes/route");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* let port = process.env.PORT;
const dataBaseUrl = process.env.DB_URL; */
let port = 8000;

mongoose
  .connect("mongodb+srv://admin:admin123@siamaq.h4fjfrg.mongodb.net/customers", {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDb Is Connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
