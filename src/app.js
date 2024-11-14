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


//criar rota padrão
app.get('/', (req, res) => {
  res.send('curso de nodejs')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})



app.post('/selecoes', (req, res) => {
 selecoes.push(req.body)
 res.status(201).send ('seleção criada com sucesso')
})
export default app
