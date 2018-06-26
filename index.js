// index.js
const knex = require("knex")(require("./knexfile")[process.env.NODE_ENV || "development"])
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/list", (req, res) => {
  knex("pessoa").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.post("/save", (req, res) => {
  knex("pessoa").insert(req.body, "idpessoa")
   .then(ret => knex("pessoa").select().where("idpessoa", ret[0]))
   .then(ret => res.send(ret))
   .catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))
