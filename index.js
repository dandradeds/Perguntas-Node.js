const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")

connection
          .authenticate()
          .then(() => {
              console.log("conexão feita")
          })
          .catch((msgErro) => {
            console.log("Error")
          })


app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",(req, res)=>{
    res.render("index")
})

app.get("/",(req, res)=>{
    res.render("perguntas")
})

app.get("/perguntar",(req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send("Formulario recebido titulo " + titulo + " " + " descricao" + descricao)

})
 
app.listen(3000,()=>{console.log("App rodando!")})
