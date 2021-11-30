const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
// import mongoose from 'mongoose.Schema';

const RecipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    year: String,
  });
  
  const Recipe = mongoose.model("Recipe", RecipeSchema);

  