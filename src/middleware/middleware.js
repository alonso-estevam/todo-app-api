const middlewareController = (app)=>{
    app.use((req, res, next)=>{
        console.log(req.headers)
        console.log(req.method)
        next()
    })
}