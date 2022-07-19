// Importando o package express
import express from 'express'

// importando os controllers
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'

// instanciando o servidor
const app = express()
// escolhendo a porta em que o servidor será aberto
const port = 3000
app.use(express.json());

// chamando os controllers e passando o servidor como parametro
usuarioController(app)
tarefaController(app)

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})


