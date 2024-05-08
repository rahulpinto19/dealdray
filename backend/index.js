const connectToMongo = require("./db")
const express = require("express")
const app = express()

const cors = require("cors");
app.use(cors());
app.use(express.json())
const port = 5000

const auth  = require('./routes/auth')
app.use("/",auth)

app.listen(port, () => {
  console.log(`backend running on  ${port} port`)
})