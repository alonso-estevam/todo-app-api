const middlewareController = (app)=>{
    app.use((req, res, next)=>{
        console.log(req.headers)
        console.log(req.method)
        if(req.method !== "GET"){
            if(req.headers.usertype === "gerente"){
                next()
            }else{
                res.json({"erro":"Usuario não autorizado"})
            }
        }else{
            // O metodo next() serve para informar que a requisição pode seguir o caminho normal
            next()
        }
    })
}