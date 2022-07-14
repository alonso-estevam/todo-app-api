/* ----------- ATIVIDADE: GET API --------------------
Usando o express e com base nas entidades e atributos definidos como prioritários, crie rotas que:
    - utilizem '/<nome da entidade>' como path(caminho) para a ativação da rota;
    - utilizem o verbo GET
    - respondam a requisição com: 'Rota ativada com GET e recurso <nome da entidade>: valores de <nome da entidade> devem ser retornados'
    - utilize o insomnia para testar as rotas criadas
========================================================
*/

import express from 'express'
const app = express();
const port = 3000;

app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com GET e recurso TAREFA: valores de tarefa devem ser retornados')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
})