//import mysql from 'mysql'
import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '8334',
    database: 'db_copa'
    
})

conexao.connect()

export default conexao