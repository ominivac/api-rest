import { consulta }  from "../database/conexao.js"

class SelecaoRepository {
    //CRUD methods
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, "não foi possivel cadastrar!")
        
    }

    findAll(){
        const sql = 'SELECT * FROM selecoes;'
        return consulta(sql, "não foi possivel listar todas as seleções!")
    }

    findById(id){
        const sql = 'SELECT * FROM selecoes WHERE id=?;'
        return consulta(sql, id, "não foi possivel encontrar a seleção pelo id passado!")
        
    }
    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], "não foi possivel atualizar !")
    }

    delete(id){
        const sql = 'DELETE FROM selecoes WHERE id=?;'
        return consulta(sql, id, "não foi possivel apagar !")
    }
}

export default new SelecaoRepository()
