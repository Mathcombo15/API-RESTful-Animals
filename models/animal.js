const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo 'nome' é obrigatório."],
        trim: true
    },
    especie: {
        type: String,
        required: [true, "O campo 'especie' é obrigatório."],
        trim: true
    },
    bioma: {
        type: String,
        required: [true, "O campo 'bioma' é obrigatório."],
        enum: { // Validador 'enum' para garantir que o valor seja um dos listados
            values: ['Amazônia', 'Cerrado', 'Mata Atlântica', 'Caatinga', 'Pampa', 'Pantanal'],
            message: 'O bioma {VALUE} não é um bioma brasileiro válido.'
        }
    },
    ameacadoDeExtincao: {
        type: Boolean,
        default: false // Define um valor padrão caso não seja fornecido
    },
    dataDeCriacao: {
        type: Date,
        default: Date.now // Define a data de criação automaticamente
    }
});

// Criação do Modelo 'Animal' a partir do Schema
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
