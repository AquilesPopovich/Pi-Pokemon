import Card from '../card/Card'
import Loading from '../loading/Loading'

const Cards = ({ isLoading, pokemons }) => {
    if (isLoading) {
      return <Loading />;
    }
  
    return (
      <div>
        {pokemons.map(({ id, name, sprites, hp, atk, def, spd, spAtk, spDef, height, weight, type }, index) => {
          return name && id ? (
            <div key={index}>
              <Card id={id} name={name} sprites={sprites} hp={hp} atk={atk} def={def} spd={spd} spAtk={spAtk} spDef={spDef} height={height} weight={weight} type={type} />
            </div>
          ) : null;
        })}
      </div>
    );
  }
  
  export default Cards;