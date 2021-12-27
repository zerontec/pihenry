import axios from "axios";
import {
  GET_RECIPES,
  GET_DETAIL,
  GET_DIETS,
  GET_TYPES_OF_DIET,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  POST_RECIPE,
  FILTER_BY_DIET,
  GET_RECIPE_NAME,
} from "../actionsTypes/index";

const server = 'http://localhost:1337'

export function getRecipes() {
  return async function (dispatch) {
    try {
     let res = await axios.get(`${server}/recipes`);

      return dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getTypeOfDiet() {
  return async function (dispatch) {
    try {
      let res = await axios.get(`${server}/types`);

      return dispatch({
        type: GET_TYPES_OF_DIET,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

/* export function getTypes (){
return function(dispatch){

  return axios.get('http://localhost:3000')
  .then(response => response.json())
  .then(json => {dispatch({ type: ORDER_BY_NAME, payload: json})})
}

} */

export function filterDiet(payload) {
  return {
    type: FILTER_BY_DIET,
    payload,
  };
}

export function orderName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderScore(payload) {
  return {
    type: ORDER_BY_SCORE,
    payload,
  };
}


export function getRecipename(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${server}/recipes?name=` + name);
      return dispatch({
        type: GET_RECIPE_NAME,
        payload: res.data,
      });
    } catch (e) {
      alert("Este recipe no esta Registrado");
    }
  };
}



export function getDiets() {
  return async function (dispatch) {
    try {
      var res = await axios.get(`${server}/types`);
      return dispatch({
        type: GET_DIETS,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}


/* export  const postRecipe = async(payload) => {
 try{ let newRecipe = `${server}/recipe` 
     await axios.post(newRecipe, payload);
  return alert(`el recipe ${payload.title} fue creado con exito `)
    
  }
    catch(e){
      return alert("Error al crear")
    }
      }
 */

export function postRecipe  (payload){

 try{return async function(){

  const res = await axios.post(`${server}/recipe`, payload)
  return res
 }
}catch(e){
  return alert("error al crear", e)
}
}



export function getDetail(id) {

    return async function (dispatch) {
      try {  var res = await axios.get(`${server}/recipes/` + id);

      return dispatch({
        type: GET_DETAIL,
        payload: res.data,
      });
    
  } catch (e) {
    console.log("Recipe no Encontrado");
  }
}
}