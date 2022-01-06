import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipename } from "../../actions";


export default function SearchBar (){

    const[name, setName] = useState("");
 const dispatch = useDispatch();

function handleInputChange(e){

    e.preventDefault();
    setName(e.target.value)
}

function handleSubmit(e){

    e.preventDefault();
    dispatch(getRecipename(name));
    setName("");
}


    return(

        <div>

  
<form className="newsletter">
            <input type="text" 
            className="newsletter__input"
            value={name} 
            onChange={(e) =>handleInputChange(e)}
            placeholder="Enter your search"/>

            <input type="submit" onClick={(e) => handleSubmit(e)} className="newsletter__submit" value="Search"/>
        </form>


        </div>
    )

}