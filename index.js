const express = require("express")
const app = express()
const port = 7777
const bodyParser = require("body-parser")
const db = require("./connection")
const response = require('./response')

app.use(bodyParser.json())

app.get("/", (req, res) => {
  response(200, "INI ANIME DATA","INI ANIME PESAN", res)
})

app.get("/mhs/:nim", (req, res) => {
  const nim = req.params.nim
  response(200, `SEPESOGOK MHS DARI NIM ${nim}`, res)
})

app.post("/a", (req, res) => {
  response(200, "INI NGISING POSTING CUSTOM", res)
})

app.put("/b", (req, res) => {
  response(200, "INI PUT RESPON KUSTOM ", res)
  
})

app.delete("/c", (req, res) => {
  response(200, "INI DELETE RESPON KUSTOM", res)
  
})

app.listen(port, () => {
  console.log(`Lu diem gw lagi dengerin kanal ${port}`)
})
