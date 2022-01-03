require("dotenv").config();
const axios = require("axios");

const { Dieta, Recipe } = require("../db");
const { API_KEY } = process.env;



const ApiInfo = async () => {
  try {
    const appiInfo = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );

    return appiInfo.data.results;
  } catch (e) {
    console.log(e);
  }
};

//Informacion de la base de Datos

const dbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Dieta,
      atrributes: ["name"],
      throungh: {
        atrributes: [],
      },
    },
  });
};


//Esto para mis user Funcionalidad Extra no PI



//Unirlos todos

const allRecipes = async () => {
  const infoApi = await ApiInfo();
  const infodb = await dbInfo();
  const totalInfo = infodb.concat(infoApi);
  return totalInfo;
};


///types//////////////////////////
/* const apiRecipes =async ()=> {
  
  try{
    const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
   
    const types = await recipesApi.data.results.map((t) => t.diets);
    const diets = types.flat();
    const typeDiets = [...new Set(diets), "vegetarian"];
    typeDiets.forEach((d) => {
     Dieta.findOrCreate({
         where: { name: d },
       });
     });

  }catch(e){
    next(e);
  }
 } */

//////////////////////////////////////////////////////////

module.exports = {
  allRecipes,
  dbInfo,
  ApiInfo,
 
};
