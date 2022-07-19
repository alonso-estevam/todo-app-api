const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
        res.send("Rota GET para o tarefa")
    })
    app.get('/tarefa', (req, res)=>{
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados");
        res.use(express.json());
    })
    
}


export default tarefaController