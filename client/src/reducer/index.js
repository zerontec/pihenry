import {
 
  GET_DETAIL,
  GET_RECIPES,
  GET_TYPES_OF_DIET,
  GET_RECIPE_NAME,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  POST_RECIPE,
  FILTER_BY_DIET,
} from "../actionsTypes";

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case GET_TYPES_OF_DIET:
      return {
        ...state,
        diets: action.payload,
      };

      case FILTER_BY_DIET:
        let allRecipes = state.allRecipes;
        const apiRecipes = allRecipes.filter((r) => !r.createdDb);
        const filteredRecipesApi = apiRecipes.filter((r) =>
          r.diets.includes(action.payload)
        );
        
        const recipeDb = allRecipes.filter((r) => r.createdDb);
        const filteredRecipeDb = recipeDb.filter(
          (r) => r.dieta.name === action.payload
        );
        const filtered = filteredRecipeDb.concat(filteredRecipesApi);
        const apiVegetarian = allRecipes.filter((r) => r.vegetarian === true);
        const dbVegetarian = recipeDb.filter(
          (r) => r.dieta.name === "vegetarian"
        );
        const vegetarian = dbVegetarian.concat(apiVegetarian);
        const ternario = action.payload === "vegetarian" ? vegetarian : filtered;
  
        return {
          ...state,
          recipes: action.payload === "default" ? allRecipes : ternario,
          //if, else if, else
        };
    case ORDER_BY_NAME:
      let orderRecipes =
      action.payload === "A-Z"
        ? state.recipes.sort(function (a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            if (b.title.toLowerCase() > a.title.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        : state.recipes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            }
            if (b.title.toLowerCase() < a.title.toLowerCase()) {
              return -1;
            }
            return 0;
          });

      return {
        ...state,
        recipes: action.payload === "default" ? state.recipes : orderRecipes,
      };

    case ORDER_BY_SCORE:
      let ordenarRecipes =
        action.payload === "Desc"
          ? state.recipes.sort((a, b) => a.aggregateLikes - b.aggregateLikes)
          : state.recipes.sort((a, b) => b.aggregateLikes- a.aggregateLikes);
      return {
        ...state,
        recipes: action.payload === "ALL" ? state.recipes : ordenarRecipes,
      };

    case GET_RECIPE_NAME:
      return {
        ...state,
        recipes: action.payload,
      };

  
    case POST_RECIPE:
      return {
        ...state,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
