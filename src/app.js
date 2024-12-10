import express from 'express'
import conexao  from '../infra/conexao.js'

const app = express()

//indicar para o expresse ler body com json
app.use(express.json())

app.get('/selecoes', (req, res) => {
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
  const id = parseInt(req.params.id)
  const sql = 'SELECT * FROM selecoes WHERE id=?;'
  conexao.query(sql, id,( error, result,) => {
    const linha = result[0]
    if (error) {
      console.log(error)
      res.status(404).json({'Erro': 'dados não encontrados'})
    }else {
      res.status(200).json(linha)
    }
  })
})


app.post('/selecoes', (req, res) => {
  const selecao = req.body
  const sql = "INSERT INTO selecoes SET ?;"
  conexao.query(sql, selecao,( error, result,) => {
    if (error) {
      console.log(error)
      res.status(404).json({'Erro': 'dados não encontrados'})
    }else {
      res.status(201).json(result)
    }
  })
})

app.delete('/selecoes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const sql = 'DELETE FROM selecoes WHERE id=?;'
  conexao.query(sql, id,( error, result,) => {
    if (error) {
      console.log(error)
      res.status(404).json({'Erro': error})
    }else {
      res.status(200).send('seleção deletada com sucesso')
    }
  })
})

app.put('/selecoes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const sql = 'UPDATE selecoes SET ? FROM selecoes WHERE id=?;'
  conexao.query(sql, [selecao, id],( error, result,) => {
    if (error) {
      console.log(error)
      res.status(404).json({'Erro': error})
    }else {
      res.status(200).send('seleção deletada com sucesso')
    }
  })
})

export default app
