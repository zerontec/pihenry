import axios from 'axios'
import {GET_RECIPES,
    GET_DETAIL,
    GET_DIETS,
    GET_TYPES_OF_DIET,
    ORDER_BY_NAME,
    ORDER_BY_SCORE,
    POST_RECIPE,
    FILTER_BY_DIET,GET_RECIPE_NAME} from '../actionsTypes/index';





export function getRecipes() {
  return async function (dispatch) {
    try {
      var res = await axios.get("http://localhost:1337/recipes");

      return dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getTypeOfDiet  () {
  return async function (dispatch) {
    try {
      var res = await axios.get("http://localhost:1337/types");

      return dispatch({
        type: GET_TYPES_OF_DIET,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};


/* export function getTypes (){
return function(dispatch){

  return axios.get('http://localhost:3000')
  .then(response => response.json())
  .then(json => {dispatch({ type: ORDER_BY_NAME, payload: json})})
}

} */


export function  filterDiet(payload){
return {
type:FILTER_BY_DIET,
payload
  
}


}

export function orderName(payload){

  return{

    type:ORDER_BY_NAME,
    payload
  }

}

export function orderScore(payload){
  return{
    type:ORDER_BY_SCORE,
    payload
  }

}




export function getRecipename(name){

    return async function (dispatch) {
      try {
        const res = await axios.get("localhost:1337/recipes?name" + name);
        return dispatch({
          type: GET_RECIPE_NAME,
          payload: res.data,
        });
      } catch (e) {
        alert("Este recipe no esta Registrado");
      }
    };


}


export function getTypes() {
  return async function (dispatch) {
    try{  
    var res = await axios.get("loaclahost:1337/types");
    return dispatch({
      type: GET_DIETS,
      payload: res.data,
    });
}catch(e){
    console.log(e)
}
  };
}


export function postRecipe() {
  return async function (payload) {
      
    var res = await axios.get("localhost1337/recipe", payload);

    return {
      type: POST_RECIPE,
      res,
    };
  };
}

export function getDetail(id) {
  try {
    return async function (dispatch) {
      var res = await axios.get("http://localhost:1337/recipes/" + id);

      return dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    };
  } catch (e) {
    console.log(e);
  }
}