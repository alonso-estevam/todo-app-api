import Tarefa from "../models/tarefa-model"

// Função que vai receber a instância do servidor como parâmetros
// e vai agrupar todos os métodos que representam as rotas

const tarefaController = (app)=>{
    // Rotas com mesmo caminho ('/tarefa'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/tarefa', (req, res)=>{
        // cria uma instância da classe tarefa
        const tarefa = new Tarefa()

        // responde a requisição usando o método para pegar todas astarefas
        res.json(
            {"tarefas" : tarefa.pegaTarefas(),
              "erro" : false}
        )
    })

    app.post('/tarefa', (req, res)=>{
        const body = req.body
        // cria a instância de tarefa com os dados recebidos da requisição
        const tarefa = new Tarefa(body.titulo, body.descricao, body.status)
        // chama o metodo para inserir a tarefa no banco de dados
        tarefa.insereTarefa(tarefa)

        // retorna um json com uma mensagem e com usuário inserido
        res.json(
            {"msg" : "Tarefa inserida com sucesso",
             "tarefa" : tarefa,
             "erro" : false}
        )
    })
}

// exportando a função
export default tarefaController