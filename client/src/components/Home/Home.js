import React, { Fragment } from "react";
import './Home.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {
   getRecipes, 

  filterDiet,
  getTypeOfDiet,
  orderName,
  orderScore

 } from "../../actions";
 import Card from '../card/Card'
 import Paginate from "../Paginate/Paginate";
import SearchBar from "../Search/SearchBar";
import Navbar from "../navBar/Navbar";
import Loading from "../Loading/Loading";




export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  //Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //OrdenarPor Nombre
  const [orderNames, setOrderNames] = useState("");
  const [orderScores, setOrderScore] = useState("");
  const [loading, setLoading] = useState(false);
  //useEfect

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true)
    dispatch(getTypeOfDiet());
  }, [dispatch]);

  //funciones de busqueda
  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleSelectTypeDiet(e) {
    e.preventDefault();
    dispatch(filterDiet(e.target.value));
  }

  function handleSelectName(e) {
    e.preventDefault();
    dispatch(orderName(e.target.value));
    setCurrentPage(1);
    setOrderNames("Order", + e.target.value);
  }
  function handleSelectScore(e) {
    e.preventDefault();
    dispatch(orderScore(e.target.value));
    setCurrentPage(1);
    setOrderScore("Order", + e.target.value);
  }

  return (
    <div>

<Navbar/>
      <main />
      <section className="he">
      <div className="container">
          <h2 className="subtitle">
            Conoce Todas Nuestras Recetas <span className="point">.</span>
          </h2>
          <p className="copy__section ">
            Ofrecemos una gran variedad 
          </p>
</div>

    </section>

      {/* Por nombre */}
      <SearchBar />
      <div className="busct">
        <button onClickCapture={(e) => handleClick(e)} className="cta">
          Buscar Todas
        </button>
        <Link to={'/recipe'} >  <button  className="btnr">
          Crear Receta
        </button></Link> 
      </div>

      

      {/* Por Orden */}
      <div className="colun">
        <form className="newsletter">
          <select className="newsletter" onChange={(n) => handleSelectName(n)}>
          <option value="default">Todas</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          </select>
          <h3>Buscar en orden</h3>
        </form>

        <form className="newsletter">
          <select className="newsletter" onChange={(s) => handleSelectScore(s)}>
            <option value="default">Todas</option>
            <option value="Asc">Mayor Puntajes</option>
            <option value="Desc">Menor Puntajes</option>
          </select>
          <h3>Buscar por Puntaje</h3>
        </form>

        <form className="newsletter">
          <select
            className="newsletter"
            onChange={(e) => handleSelectTypeDiet(e)}>
            <option value="default">Todas</option>
            {diets.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
              </option> // mapeo las dietas por nombre y las renderizo
            ))}
          </select>
          <h3>Buscar por Dieta</h3>
        </form>
      </div>

      <section className="services">
        <div className="container">
        

          {
          currentRecipes.length ? currentRecipes.map((c) => {
            return(
              <Fragment key={c.id}>
           
              <Link to={"/home" + c.id}>
                <Card
                  title={c.title}
                  image={
                    c.image ? (
                      c.image
                    ) : (
                      <img src="http://testimage.com" alt="Img no Encontrada" />
                    )
                  }
                   diets={
                    c.createdDb ? c.dieta.map((d) => ( <p key={d.name} >{d.name} </p>
                        )) : c.diets.map((d) => (<p key={d} > {d}</p>))
                  } 
                  
                  vegetarian={
                    c.vegetarian === true ? ( <p >vegetarian</p>) : <p></p>
                    
                  }
                  score={c.aggregateLikes}
                />
              </Link>
             </Fragment>
            )
                }):<Loading/>
              }

      
  
    </div>


    
      </section>

   
     
        <Paginate
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginate={paginate}
        />
     


    </div>
  );
}