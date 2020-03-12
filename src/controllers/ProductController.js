const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1} = req.query; // usando desestruturação para pegar o parâmetro 'page' de get, tendo valor padrão de 1
    const products = await Product.paginate({}, {page, limit: 10}); // primeiro parâmetro são filtros (where, etc.), e o segundo são as configs da paginação
    return res.json(products); // API retornando em formato JSON
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
 
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    // o new: true faz com que retorne o objeto com os novos valores
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send(); // vai retornar uma reposta de SUCESSO sem conteúdo
  }
};