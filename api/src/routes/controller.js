/* const Dieta = require("../models/Dieta");
const Recipe = require("../models/Recipe"); */
const { allRecipes} = require("./functions");
const { Dieta, Recipe } = require("../db");

const { API_KEY } = process.env;
require("dotenv").config();
const axios = require("axios");


/// recipes//////////////////

const getRecipes = async (req, res) => {
  try {const { name} = req.query;
 
    const totalRecipes = await allRecipes();
    if (name) {
      let recipeName = await totalRecipes.filter((r) =>r.title.toLowerCase().includes(name.toLowerCase())
      );
      recipeName.length? res.status(200).json(recipeName):
       res.status(400).json("Esta Receta no esta registrada");
    } else {
      res.status(200).json(totalRecipes);
    }
  } catch(e){

      console.log(e)

  }
 
};
///////////////////////////////xcvvxcvxc////////////////////////

const getTypes=   async (_req, res) => {
  try{
    const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
   
  const types = await recipesApi.data.results.map((t) => t.diets);
   const diets = types.flat();
   const typeDiets = [...new Set(diets) , "vegetarian"];
   typeDiets.forEach((d) => {
    Dieta.findOrCreate({
        where: { name: d },
      });
    });
  
   const allDiets = await Dieta.findAll();
   res.send(allDiets);
     }catch(e){
         console.log(e)
     }
  };



////POST/////////////
const postRecipe = async (req, res) => {
  try {
    const { title, summary, aggregateLikes, healthScore, analyzedInstructions, image, diets } =req.body;

    const totalRecipes = await allRecipes();
    if (!title|| !summary) {
      return res.json(
        "Ingresa un nombre y Resumen de plato para crear el mismo"
      );
    }else if(title){

      let recipeTitle = await totalRecipes.filter((r) => r.title.toLowerCase().includes(title.toLowerCase()));
      if(recipeTitle.length){
     return  res.send( "Ya existe Un recipe con ese Nombre")
      }
    }

    const createRecipe = await Recipe.create({
      title,
      summary,
      aggregateLikes, 
      healthScore, 
      analyzedInstructions,
      image,
     
     
    });
    let dietDb = await Dieta.findAll({where: { name: diets },  //areglo de id que viene del front
    });
    createRecipe.addDieta(dietDb);
    res.status(200).send("Recipe Creada Con Exito :)");
  } catch (e) {
    console.log(e);
  }
};

const getRecipeId = async (req, res) => {
  try {
    const { id } = req.params;
    const recipeTotal = await allRecipes();
    if (id) {
      let recipeId = await recipeTotal.filter((r) => r.id == id);
      recipeId.length ? res.status(200).json(recipeId): res.status(400).send("Recipe No Encontrado");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getRecipes,
  getTypes,
  postRecipe,
  getRecipeId,
};
