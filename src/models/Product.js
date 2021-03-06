const mongoose = require('mongoose'); // solicitando Mongoose
const mongoosePaginate = require('mongoose-paginate');

// Criando schema de Product
const ProductSchema = new mongoose.Schema({
  title: { // coluna
    type: String, // tipo
    required: true // obrigatória
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // valor padrão
  }
});

ProductSchema.plugin(mongoosePaginate);

// Passando schema para o banco
mongoose.model('Product', ProductSchema);

