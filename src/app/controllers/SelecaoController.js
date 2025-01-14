import conexao from '../database/conexao.js'
import SelecaoRepository from '../repository/SelecaoRepository.js'

class SelecaoController {

  //lista todos
    async index(req, res) {
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }

    //Listar por id
    async show(req, res) {
      const id = req.params.id
      const row = await SelecaoRepository.findById(id)
      res.json(row)
    }

    store(req, res) {
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
    }

    update(req, res) {
      const id = req.params.id
      const selecao = req.body
      const sql = 'UPDATE selecoes SET ? FROM selecoes WHERE id=?;'
      conexao.query(sql, [selecao, id],( error, result) => {
        if (error) {
          res.status(404).json({'Erro': error})
        }else {
          res.status(200).send('seleção deletada com sucesso')
        }
      })
    }

    delete(req, res) {
      const id = parseInt(req.params.id)
      const sql = 'DELETE FROM selecoes WHERE id=?;'
      conexao.query(sql, id,( error, result) => {
        if (error) {
          res.status(404).json({'Erro': error})
        }else {
          res.status(200).send('seleção deletada com sucesso')
        }
      })
    }

}
//padrão singleton
export default new SelecaoController()
