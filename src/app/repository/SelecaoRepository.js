import conexao from "../database/conexao.js"

class SelecaoRepository {

    //CRUD methods
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if (error) reject("não foi possível cadastar")
                const  row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findAll(){
        const sql = 'SELECT * FROM selecoes;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) reject("não foi possível localizar")
                const  row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id){
        const sql = 'SELECT * FROM selecoes WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql,id, (erro, result) => {
                if (erro) reject("não foi possível localizar")
                const  row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
        
    }
    update(){}
    delete(){}


}

export default new SelecaoRepository()