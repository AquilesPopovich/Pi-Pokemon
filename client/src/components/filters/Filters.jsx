import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, filter, orderAlf, orderAtk } from "../../redux/actions";

const Filters = () => {
  const types = useSelector((state) => state.pokemonsTypes);
  const dispatch = useDispatch();

  const handleFiltersTypes = (event) => {
    dispatch(filterByType(event.target.value));
  };

  const handleFilters = (event) => {
    dispatch(filter(event.target.value));
  };

  const handleOrder = (event) => {
  if(event.target.value === "AtkAscendente" || event.target.value === "AtkDescendente"){
    dispatch(orderAtk(event.target.value));
  }else{
    dispatch(orderAlf(event.target.value));
  }
      
   
     
    
  };

  return (
    <div>
      <div>
        <select onChange={handleFiltersTypes}>
          <option value="All" hidden>Types</option>
          <option value="All">All</option>
          {types &&
            types.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name.toUpperCase()}
              </option>
            ))}
        </select>

        <select onChange={handleFilters}>
          <option value="All" hidden>Storage</option>
          <option value="AllPokemons">All Pokemons</option>
          <option value="Stored">Exist</option>
          <option value="Created">Create</option>
        </select>
      </div>
      <div>
        <select onChange={handleOrder}>
          <option value="All" hidden>Orden</option>
          <option value="Ascendente">A-Z</option>
          <option value="Descendente">Z-A</option>
          <option value="AtkAscendente">Atk↑</option>
          <option value="AtkDescendente">Atk↓</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
