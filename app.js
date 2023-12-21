const express = require("express");
const { newUser } = require("./models/userModel");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/usuarios" , require("./routes/usersRoutes"))

app.listen(port, () => {
  console.log("SERVIDOR LEVANTADO");
});
