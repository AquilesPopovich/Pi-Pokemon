import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import {pokemonByID} from '../../redux/actions'
import styles from "./detail.module.css";


const Detail = ({isLoading, setIsLoading}) =>{
    const {id} = useParams()
    const pokemonById = useSelector((state)=> state.pokemonByID )
    console.log(pokemonById)
    const dispatch = useDispatch();
     const typesPokemonId = pokemonById.types ?  pokemonById.types : pokemonById.types = pokemonById.Types
    const typeElements = typesPokemonId?.map((type) => (
      <div className={styles.containerImg} key={type.name}>
        <img className={styles[type.name.toLowerCase()]} src={`/assets/icons/${type.name.toLowerCase()}.svg`} alt={type.name} />
      </div>
    ));

    

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
    console.log(pokemonById.sprites)
    return (
      <div className={styles["detail-container"]}>
        <div className={styles["contentDetail"]}>
          <div>
            <img
              className={styles.imgDetail}
              src={pokemonById.sprite}
              alt={pokemonById.name}
            />
          </div>
          <div className={styles["detail-container-stats"]}>
            <div className={styles.typesContainer}>
            <h2>{pokemonById.name} </h2>
            <div className={styles.typesContainer}>
            {typeElements}
            </div>
            </div>
            <div>
              <div>
                <span>ID:</span> {id}
                
              </div>
              <h3>STATS:</h3>
              <div className={styles.stats}>
                <span>HP:</span> {pokemonById.hp}
              </div>
              <div className={styles.stats}>
                <span>SPD:</span> {pokemonById.spd}
              </div>
              <div className={styles.stats}>
                <span>ATK:</span> {pokemonById.atk}
              </div>
              <div className={styles.stats}>
                <span>SP.ATK:</span> {pokemonById.spAtk}
              </div>
              <div className={styles.stats}>
                <span>DEF:</span> {pokemonById.def}
              </div>
              <div className={styles.stats}>
                <span>SP.DEF:</span> {pokemonById.spDef}
              </div>
              <div className={styles.stats}>
                <span>Height: {pokemonById.height / 10}m</span>
                
              </div>
              <div className={styles.stats}>
                <span>Weight: {pokemonById.weight / 10}kg</span>
                
              </div>
            </div>
          </div>
          <Link to={"/home"} className={styles.backButton}>
            <button className={styles.customButton}></button>
          </Link>
        </div>
      </div>
    );

}

export default Detail