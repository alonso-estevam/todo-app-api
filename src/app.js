// Importando o package express
import express from 'express'

// importando os controllers
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'

// import de middlewares
import autenticacao from './middleware/autenticacao.js'

// importando o bd (VERIFICAR)
import bd from './infra/bd.js'

// instanciando o servidor
const app = express()
// escolhendo a porta em que o servidor será aberto
const port = 3000

// middlewares
app.use(express.json()) // middleware que faz o parse do json do body

// outros middlewares (validações, autenticações, tratamento de erros)
// usado se necessário dependendo das regras de negócio do processo
autenticacao(app)

// chamando os controllers e passando o servidor como parâmetro
usuarioController(app)
tarefaController(app)

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})


