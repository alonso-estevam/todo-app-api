import bd from '../infra/bd.js'

let id = 0

class Usuario {
    constructor(nome, email, senha) {
        this.id = id++;
        this.nome = nome;
        this.email = email;
        // se for passado alguma senha, chama a função de validação
        this.senha = senha ? this.validaSenha(senha) : undefined
    }

     // metodo de validacao de senha
     validaSenha = (senha)=>{
        if(senha.length >= 6){
            return senha
        }else{
            throw new Error("Senha com tamanho errado!")
        }
    }

    // método para inserir usuário no banco de dados
    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    // método para pegar todos os usuários do banco de dados
    pegaUsuarios = ()=>{
        return bd.usuario
    }
}

export default Usuario;