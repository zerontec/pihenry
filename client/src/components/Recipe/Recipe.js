import React,{useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getTypeOfDiet } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Recipe.css";
import Navbar from "../navBar/Navbar";


function validate(input) {
  let errors = {};
  input.title
    ? (errors.title = "")
    : (errors.title = "You must enter a Recipe name");
  input.summary
    ? (errors.summary= "")
    : (errors.summary= "Enter Summary Please");
  input.diets.length < 1
    ? (errors.diets = "Select a type of Diet ")
    : (errors.diets = "");
    if (!input.image.includes("https://") && !input.image.includes("http://")) {
      errors.image = "It is not a valid image";
  } else {
    errors.image = "";
  }

  return errors;
}


export default function Recipe() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypeOfDiet());
  }, [dispatch]);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    aggregateLikes: 0,
    healthScore: 0,
    analyzedInstructions: "",
    image: "",
    diets: [],
  });

  function handleChange(e) {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }


  function handleSubmit(e) {
    if (input.title && input.summary && input.image && input.diets.length > 0) {
      e.preventDefault();
      dispatch(postRecipe(input));
      alert("Successfully created recipe");
      setInput({
        title: "",
        summary: "",
        aggregateLikes: 0,
        healthScore: 0,
        analyzedInstructions: "",
        image: "",
        diets: [],
      });
      history.push("/home");
    } else {
      e.preventDefault();
      alert("you must fill in all the information ");
    }
  }

  /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */


  function handleSelectDiet(e) {

  /*   if(e.target.value === 'Elige tipos de Dietas ')return
    if(input.diets.includes(e.target.value))return */
    setInput((input) => ({
      ...input,
      diets: [...input.diets, e.target.value],
    }));

    setErrors(
      validate({
        ...input,
        diets: [...input.diets, e.target.value],
      })
    );
  }
  


  function handleDelete(e, d) {
    e.preventDefault();
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== d),
    });
  }

  return (
    <div>
       <Navbar/>
       <main>

       <section className="herr">
      <div className="container">
          <h2 className="subtitle">
          Know All Our Recipes <span className="point">.</span>
          </h2>
          <p className="copy__section ">
          and create yours too
          </p>
</div>

    </section>

      <section className="email container container--modifier">
        <h2 className="subtitle subtitle--modifier">
        Create your own Recipe
          <span className="point">.</span>
        </h2>

    
        <Link to="/home">
          <button className="btnHome">Return Home</button>
        </Link>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="titler">
            <h2>Recipe Title</h2>
          </div>

          <input
            type="text"
            className="form__input"
            placeholder="Enter Recipe Title"
            value={input.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          {errors.title && <p className="pe">{errors.title}</p>}

          <div className="titler">
            <h2>Summary</h2>
          </div>

          <input
            type="text"
            className="form__input"
            placeholder="Recipe Summary"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
          {errors.summary && <p className="pe">{errors.summary}</p>}


         

          <div className="titler">
            <h2>Instructions</h2>
          </div>
          <input
            type="text"
            className="form__input"
            placeholder="Instructions"
            value={input.analyzedInstructions}
            name="analyzedInstructions"
            onChange={(e) => handleChange(e)}
          />



{/* 
          <div className="colunp"> */}
        
             <div className="titler">
            <h2>Score</h2>
          </div>

          <input
            type="text"
            className="form__input"
            placeholder="Give it a score"
            value={input.aggregateLikes}
            name="aggregateLikes"
            onChange={(e) => handleChange(e)}
          />
          
             <div className="titler">
            <h2>Health level</h2>
          </div>

          <input
            type="text"
            className="form__input"
            placeholder="Health level"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
         <div className="titler">
              <h2> Image</h2>
            </div>
          <input
            type="text"
            className="form__input"
            placeholder="Please enter a valid image address"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
             {errors.image && <p className="pe">{errors.image}</p>}



          

            <div className="titler">
              <h2>Diet Type </h2>
            </div>
            <select onChange={(e) => handleSelectDiet(e)} className="form__input">
              {diets.map((d) => (
                <option value={d.name} key={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
            {input.diets.map((d, i) => (
              <ul key={i}>
                <li>{d}</li>
                <button onClick={(e) => handleDelete(e, d)}>x</button>
              </ul>
            ))}
            {errors.diets && <p className="pe">{errors.diets}</p>}
          

          

       <hr/>


          <div className="btc">
          <button className="card__button " type="submit">
          Create your Recipe
          </button>
        </div>
        </form>

       
      </section>
      </main>
    {/*   <Footer/> */}
    </div>
  );
}
