import React,{useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getTypeOfDiet, getDiets } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Recipe.css";
import Navbar from "../navBar/Navbar";
import Footer from "../Fotter/Footer"

function validate(input) {
  let errors = {};
  input.title
    ? (errors.title = "")
    : (errors.title = "Debe Ingresar un nombre de Receta");
  input.summary
    ? (errors.summary= "")
    : (errors.summary= "Ingrese Resumen Porfavor");
  input.diets.length < 1
    ? (errors.diets = "Seleccione un tipo de Dieta ")
    : (errors.diets = "");
    if (!input.image.includes("https://") && !input.image.includes("http://")) {
      errors.image = "No es una imagen valida";
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

  function handletChange(e) {
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
  function handletSubmit(e) {
    if (input.title && input.summary && input.image && input.diets.length > 0) {
      e.preventDefault();
      dispatch(postRecipe(input));
      alert("Receta creada con Exito");
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
      alert("debe completar todas la información ");
    }
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
            Conoce Todas Nuestras Recetas <span className="point">.</span>
          </h2>
          <p className="copy__section ">
          y crea la tuya tambien 
          </p>
</div>

    </section>

      <section className="email container container--modifier">
        <h2 className="subtitle subtitle--modifier">
          Crea tu propia Receta
          <span className="point">.</span>
        </h2>

        {/*   <p className="copy__section copy__section--modifier">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, et
          dolore id necessitatibus quibusdam rem accusamus fugiat doloremque
          voluptatibus eius!
        </p> */}
        <Link to="/home">
          <button className="btnHome">Regresar Home</button>
        </Link>
        <form className="newsletter" onSubmit={(e) => handletSubmit(e)}>
          <div className="titler">
            <h2>Titulo de la Receta</h2>
          </div>

          <input
            type="text"
            className="newsletter__input"
            placeholder="Ingresa Titulo de la Receta"
            value={input.title}
            name="title"
            onChange={(e) => handletChange(e)}
          />
          {errors.title && <p className="pe">{errors.title}</p>}

          <div className="titler">
            <h2>Resumen</h2>
          </div>

          <input
            type="text"
            className="newsletter__input"
            placeholder="Resumen de la Receta"
            value={input.summary}
            name="summary"
            onChange={(e) => handletChange(e)}
          />
          {errors.summary && <p className="pe">{errors.summary}</p>}


         

          <div className="titler">
            <h2>Instrucciones</h2>
          </div>
          <input
            type="text"
            className="newsletter__input"
            placeholder="instrucciones"
            value={input.analyzedInstructions}
            name="analyzedInstructions"
            onChange={(e) => handletChange(e)}
          />



{/* 
          <div className="colunp"> */}
        
             <div className="titler">
            <h2>Puntaje</h2>
          </div>

          <input
            type="text"
            className="newsletter__input"
            placeholder="Dale un Pauntaje"
            value={input.aggregateLikes}
            name="aggregateLikes"
            onChange={(e) => handletChange(e)}
          />
          
             <div className="titler">
            <h2>Nivel de Salud</h2>
          </div>

          <input
            type="text"
            className="newsletter__input"
            placeholder="Nivel de Salud"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handletChange(e)}
          />
         <div className="titler">
              <h2> Imagen</h2>
            </div>
          <input
            type="text"
            className="newsletter__input"
            placeholder="Ingresa una direccion de imagen valida"
            value={input.image}
            name="image"
            onChange={(e) => handletChange(e)}
          />
             {errors.image && <p className="pe">{errors.image}</p>}



            <div className="titler">
              <h2>Tipo de Dieta </h2>
            </div>

            <select onChange={(e) => handleSelectDiet(e)}
              className="newsletter__input"
            >
              { diets.map(d =>{ 
              return ( <option value={d.name}  key={d.id} /* name={d.name} */  >
                  <p>{d.name}</p>
                </option>
              )})}
            </select>
            {input.diets.map((d, i) => (
              <ul key={i}>
                <li>{d}</li>
                <button onClick={(e) => handleDelete(e, d)}>X</button>
              </ul>
            ))}
             {errors.diets && <p className="pe">{errors.diets}</p>}
          

          

       <hr/>


          <div className="btc">
          <button className="card__button " type="submit">
           Crea tu Recipe
          </button>
        </div>
        </form>

       
      </section>
      </main>
      <Footer/>
    </div>
  );
}
