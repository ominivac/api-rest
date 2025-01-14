import conexao from "../database/conexao.js"

class SelecaoRepository {

    //CRUD methods
    create(){}

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



    findById(){}
    update(){}
    delete(){}


}

export default new SelecaoRepository()