import express from 'express'

const app = express()

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


export default app
