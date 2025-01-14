
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

    async store(req, res) {
      const selecao = req.body
      const  row = await SelecaoRepository.create(selecao)
      res.json(row)
    }

    async update(req, res) {
      const id = req.params.id
      const selecao = req.body

      const row = await SelecaoRepository.update(selecao, id)
      res.json(row)
    }

    async delete(req, res) {
      const id = parseInt(req.params.id)
      const row = await SelecaoRepository.delete(id)
      res.json(row)
    }

}
//padrão singleton
export default new SelecaoController()
