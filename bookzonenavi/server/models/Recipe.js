const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'This field is required.'
  },
  CourseName: {
    type: String,
    required: 'This field is required.'
  },
  Price: {
    type: String,
    required: 'This field is required.'
  },
  
  /*ingredients: {
    type: Array,
    required: 'This field is required.'
  },*/
  description: {
    type: String,
    required:' This field is required'
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

recipeSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);