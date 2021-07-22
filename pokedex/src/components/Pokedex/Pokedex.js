import React from "react";
import ListPokemons from "./ListPokemons";
import NavBar from "../appBar/NavBar";
import Banner from "../banner/Banner";



const Pokedex = () => {
  return (
    <div>
      
      <NavBar />
      <Banner/>
      <ListPokemons />
      
    </div>
  );
};

export default Pokedex;
