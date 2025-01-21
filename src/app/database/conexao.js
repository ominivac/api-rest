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
/**
 * Executa um código SQL , com ou sem valores  
 * @param {string} sql Instrução sql a ser executada
 * @param {string  | [seleção, id]} valores a seres passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objecto da Promisse
 */
export const consulta = (sql, valores='', mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) reject(mensagemReject)
            const  row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao