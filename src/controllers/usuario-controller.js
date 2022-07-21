import Usuario from "../models/usuario-model.js"

// função que vai receber a instância do servidor como parâmetros
// e vai agrupar todos os métodos que representam as rotas

const usuarioController = (app)=>{
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/usuario', (req, res)=>{
        // cria uma instância do classe usuário
        const usuario = new Usuario()
        
        // responde a requisição usando o método para pegar todos os usuários
        res.json(
            {"usuarios" : usuario.pegaUsuarios(),
             "erro" : false}
        )
    })

    app.post('/usuario', (req, res)=>{
        const body = req.body
        try {
            // cria a instancia de usuario com os dados recebidos da requisição
            const usuario = new Usuario(body.nome, body.email, body.senha)
            // chama o metodo para inserir o usuario no banco de dados
            usuario.insereUsuario(usuario)

            // retorna um json com uma mensagem e com usuario inserido
            res.json(
                {"msg" : "Usuário inserido com sucesso",
                "usuario" : usuario,
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }

    })
}

// exportando a função
export default usuarioController