import express from 'express'

const app = express()

//indicar para o expresse ler body com json
app.use(express.json())

//mock
const selecoes = [
  { id: 1, nome: 'Seleção A' },
  { id: 2, nome: 'Seleção B' },
  { id: 3, nome: 'Seleção C' },
  { id: 4, nome: 'Seleção D' },
]

function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}


//criar rota padrão
app.get('/', (req, res) => {
  res.send('curso de nodejs')
})

app.get('/selecoes/:id', (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id))
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
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
