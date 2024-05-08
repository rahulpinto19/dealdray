const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/admin");

const jwt_secret = "secretekey";

router.post("/signin", async (req, res) => {
  
  console.log(req.body);
  const id = req.body.id;
  const password = req.body.password;
  try {
    const getAdmin = await AdminUser.findOne({ id: id });
    if (getAdmin && password === getAdmin.password) {
      const data = { id, password };
      const authtoken = jwt.sign(data, jwt_secret);
      res
        .status(200)
        .send({ message: "succesfully logged in", authtoken: authtoken });
      return;
    } else {
      res.status(500).send({ message: "Invalid credentials" });
      return;
    }
  } catch (err) {
    res.send("server issue 23");
    return;
  }
  // res.status(200).send("ok")
});
module.exports = router;
