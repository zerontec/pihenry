import {
  GET_DIETS,
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

function rooReducer(state = initialState, action) {
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
        diest: action.payload,
      };
    case FILTER_BY_DIET:
      let allRecipes = state.allRecipes;
      const recipesApi = allRecipes.filter((r) => !r.createdDb);
      const filterApiRecipes = recipesApi.filter((r) =>
        r.diets.includes(action.payload)
      );

      const recipeDb = allRecipes.filter((r) => r.createdDb);
      const filtreRecipeDb = recipeDb.filter(
        (r) => r.diets.name === action.payload
      );

      const filtered = filtreRecipeDb.concat(filterApiRecipes);
      const apiVege = allRecipes.filter((r) => r.vegetarian === true);
      const dbVega = recipeDb.filter((r) => r.diets.name === "vegetarian");

      const vegetarian = dbVega.concat(apiVege);
      const resp = action.payload === "vegetarian" ? vegetarian : filtered;

      return {
        ...state,
        recipes: action.payload === "default" ? allRecipes : resp,
      };

    case ORDER_BY_NAME:
      let orderRecipes = "A_Z"
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
      let orderRecipes =
        action.payload === "Desc"
          ? state.recipes.sort((a, b) => a.agregatesLike - b.agregatesLike)
          : state.recipes.sort((a, b) => b.agregatesLike - a.agregatesLike);
      return {
        ...state,
        recipes: action.payload === " ALL" ? state.recipes : orderRecipes,
      };

    case GET_RECIPE_NAME:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
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
