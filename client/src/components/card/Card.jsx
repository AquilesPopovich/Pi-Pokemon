import { Link } from "react-router-dom";

const Card = ({ id, name, sprite, type }) => {
  console.log(type)
    const typeElements = type?.map((typ) => (
        <div key={typ.name} >
          <img src={`/assets/icons/${typ.name.toLowerCase()}.svg`} alt={typ.name}  />
        </div>
      ));

  return (
    <div>
      <Link to={`/detail/${id}`}>
        <div>
          <img src={`${sprite}`} alt={`${name} sprite`} />
          <h2>{name}</h2>

          <div>
            <p>Type: {typeElements} </p>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
