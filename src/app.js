import express from 'express'
import conexao  from '../infra/conexao.js'

const app = express()

//indicar para o expresse ler body com json
app.use(express.json())



function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/selecoes', (req, res) => {
 // res.status(200).send(selecoes)
  const sql = 'SELECT * FROM selecoes;'
  conexao.query(sql, ( error, result,) => {
    if (error) {
      console.log(error)
      res.status(404).json({'Erro': 'dadosnão encontrados'})
    }else {
      res.status(200).json(result)
    }
   
  })
})

app.get('/selecoes/:id', (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id))
})


app.post('/selecoes', (req, res) => {
 selecoes.push(req.body)
 res.status(201).send ('seleção criada com sucesso')
})

app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id)
  selecoes.splice(index, 1)
  res.status(200).send('seleção deletada com sucesso')
})



app.put('/selecoes/:id', (req, res) => {
  let index = buscarIndexSelecao(req.params.id)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].nome = req.body.nome
  res.json(selecoes)
})


export default app
