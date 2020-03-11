const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find(); // trazer todos os produtos
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