import app from './src/app.js';



const PORT = 3000

// criar conexão com o banco de dados

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL: http://localhost:${PORT}`)
})



