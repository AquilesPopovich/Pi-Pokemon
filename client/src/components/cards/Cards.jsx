import React, { useState } from 'react';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import style from './cards.module.css';
import Pagination from '../pagination/Pagination'; 

const Cards = ({ isLoading, pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);

  
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPokemons = Array.isArray(pokemons)
    ? pokemons.slice(startIndex, endIndex)
    : [pokemons];

    console.log(pokemons.type)
  return (
    <div className={style.container}>
      

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={style.cards}>
            {displayedPokemons.map(({ id, name, sprite, type }, index) => (
              <div key={index} className={style.card}>
                <Card id={id} name={name} sprite={sprite} type={type} />
              </div>
            ))}
          </div>

          
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={Array.isArray(pokemons) ? pokemons.length : 1}
          />
        </>
      )}
    </div>
  );
  
};

export default Cards;
