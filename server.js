const express = require("express");
const db = require('./app/db/models');
const bodyParser = require("body-parser");



db.sequelize.sync({force:true}).then(()=>{
    console.log('Tabelas Dropadas e Sincronizadas')
})
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//POST,PUT,DELETE,GET
app.get("/", (req, res) => {
  res.json({ message: "API GRUPOU " })
});


//require("./app/routes/usuario.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("servidor rodando na porta ${PORT}");
})