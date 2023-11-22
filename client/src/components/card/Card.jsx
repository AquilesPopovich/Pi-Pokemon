import { Link } from "react-router-dom";
import styles from "./card.module.css"; 
import axios from 'axios'


const Card = ({ id, name, sprite, types }) => {
  const typeElements =  types?.map((type) => (
    <div className={styles.containerImg} key={type.name}>
      <img className={styles[type.name.toLowerCase()]} src={`/assets/icons/${type.name.toLowerCase()}.svg`} alt={type.name} />
    </div>
  ));

  const handleImgError = (event) =>{
    event.target.src = 'https://m.media-amazon.com/images/I/71WkWKFRSWL.png'
  }

  
  const deletePokemon = async(id) =>{
    try {
      const data = {id: String(id)}
      console.log(data)
      const deletedPokemon = (await axios.delete(`http://localhost:3001/pokemons`,{data})).data
      if(deletedPokemon.status){
        alert('se elimino')
      }else{
        alert(deletedPokemon.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={styles["card-container"]}>
      {id.length > 3 && (<div onClick={() => deletePokemon(id)} className={styles.btnX}>
                  x
                </div>)}
      <Link to={`/detail/${id}`}>
        <div className={styles["card-content"]}>
          <div className={styles.containerImgPokemon}>
          <img className={styles.imgPokemon} onError={handleImgError} src={`${sprite}`} alt={`${name} sprite`} />
          </div>
          <h2 className={styles.namePokemon}>{name}</h2>
          <div>
            <p className={styles.imgTypes}>{typeElements}</p>
          </div>
          <div className={styles["collection-message"]}>
            <p>Esta coleccion de cartas son tipo unicas</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
