const soma = (a,b)=>{
    return a+b
}

const obj = {"nome": "Cinthia",
            "função": "facilitadora",
            "turma": 17}

const string = "Oi, turma 17"

// export default pode exportar apenas uma coisa (função, objeto, variável...) ou exportar tudo em forma de objeto
export default {soma, obj, string} 

// exportando só uma função:
// export default soma