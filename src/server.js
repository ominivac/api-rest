import app from './app.js';



const PORT = process.env.PORT || 3000

// criar conexão com o banco de dados

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`)
})



