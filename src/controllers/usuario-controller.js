const usuarioController = (app)=>{
    app.get('/usuario', (req, res)=>{
        res.json("Rota GET para o usuario")
    })
    app.post('/usuario', (req, res)=>{
        console.log("Tô no post");
        console.log(req.body);
        res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados")
    })
}

export default usuarioController