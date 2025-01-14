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
    update(selecao, id){
        const sql = 'UPDATE selecoes SET ? FROM selecoes WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao,id], (erro, result) => {
                if (erro) reject("não foi possível editar a seleção")
                const  row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(id){
        const sql = 'DELETE FROM selecoes WHERE id=?;'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if (erro) reject("não foi possível apagar a seleção")
                const  row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }


}

export default new SelecaoRepository()