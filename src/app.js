import express from 'express'

const app = express()


//criar rota padrão
app.get('/', (req, res) => {
  res.send('curso de nodejs')
})


export default app
