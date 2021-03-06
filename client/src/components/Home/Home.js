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

  const titulo=' Know All Our Recipes'
  const subTitulo = 'We offer a great variety '
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
 
  //useEfect

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
   
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
    setOrderNames("Order" + e.target.value);
  }
  function handleSelectScore(e) {
    e.preventDefault();
    dispatch(orderScore(e.target.value));
    setCurrentPage(1);
    setOrderScore("Order" + e.target.value);
  }

  return (
    <div>

<Navbar/>
      <main />
      <section className="he">
      <div className="container">
          <h2 className="subtitle">
           {titulo} <span className="point">.</span>
          </h2>
          <p className="copy__section ">
           { subTitulo }
          </p>
</div>

    </section>

      {/* Por nombre */}
      <SearchBar />
      <div className="busct">
        <button onClickCapture={(e) => handleClick(e)} className="cta">
        Search All
        </button>
        <Link to={'/recipe'} >  <button  className="btnr">
        Create Recipe
        </button></Link> 
      </div>

      

      {/* Por Orden */}
      <div className="colun">
        <form className="form">
          <select className="form" onChange={(n) => handleSelectName(n)}>
          <option value="default">All</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          </select>
          <h3>Search in order</h3>
        </form>

        <form className="form">
          <select className="form" onChange={(s) => handleSelectScore(s)}>
            <option value="ALL">All</option>
            <option value="Asc">Highest Score</option>
            <option value="Desc">Lower Scores</option>
          </select>
          <h3>Search by Score</h3>
        </form>

        <form className="form">
          <select
            className="form"
            onChange={(e) => handleSelectTypeDiet(e)}>
            <option value="default">All</option>
            {diets.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
              </option> // mapeo las dietas por nombre y las renderizo
            ))}
          </select>
          <h3>Search by Diet</h3>
        </form>
      </div>

      <section className="recipes">
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
                      <img src="https://previews.123rf.com/images/mackoflower/mackoflower1507/mackoflower150700380/42588917-variedad-de-ensaladas-populares-y-saludables-en-la-dieta-alimentos-collage-de-im%C3%A1genes.jpg" alt="Img no Encontrada" />
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
                  healthScore={c.healthScore}
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