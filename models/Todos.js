// Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodosSchema = new Schema({
    title: {
        type: String,
        required: true,
        // The value of title should be a, b or c => enum: ['a', 'b', 'c']
    },
    description: String
}, {timestamps: true}); //createdAt: gives timestamps for created date, updatedAt: gives timestamps for updated date

// TodosSchema is only a blue print, model makes it usable.
module.exports = mongoose.model('Todos', TodosSchema);