import React from "react";
import './Paginate.css'







export default function Paginate({ recipesPerPage, allRecipes, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div class="pagination pagicont" >
{pageNumbers &&
        pageNumbers.map((number) => (
          <a key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        ))}

    </div>

 
  );
}

