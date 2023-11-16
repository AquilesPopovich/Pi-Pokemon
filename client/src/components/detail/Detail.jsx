import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import {pokemonByID} from '../../redux/actions'


const Detail = ({isLoading, setIsLoading}) =>{
    const {id} = useParams()
    const pokemonById = useSelector((state)=> state.pokemonByID )
    const dispatch = useDispatch();

    console.log('holi',pokemonByID)
    

    useEffect(() => {
        setIsLoading(true);
    
        const loadingTimer = setTimeout(() => {
          dispatch(pokemonByID(id))
            .then(() => {
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching Pokémon:", error);
              setIsLoading(false);
            });
        }, 750);

        return () => {
            clearTimeout(loadingTimer);
          };
}, [dispatch, id])

    if (isLoading) {
        return <Loading />;
    }

    return( 
  <div>
    <div>
      <div>
        
        <div>
          <img
            src={pokemonById.sprite}
            alt={pokemonById.name}
            
          />
        </div>
        <h2>{pokemonById.name}</h2>
        <div>
          <span>ID:</span> {id}
        </div>
        <div >
          <div>
            <span>HP:</span> {pokemonById.hp}
          </div>
          <div>
            <span>SPD:</span> {pokemonById.spd}
          </div>
          <div>
            <span>ATK:</span> {pokemonById.atk}
          </div>
          <div>
            <span>SP.ATK:</span> {pokemonById.spAtk}
          </div>
          <div>
            <span>DEF:</span> {pokemonById.def}
          </div>
          <div>
            <span>SP.DEF:</span> {pokemonById.spDef}
          </div>
          <div>
            <span>Height:</span>
            <p>{pokemonById.height / 10}m</p>
          </div>
          <div>
            <span>Weight:</span>
            <p>{pokemonById.weight / 10}kg</p>
          </div>
        </div>
        <span>Types:</span>
        
      </div>
    </div>
            
  </div>
    )

}

export default Detail