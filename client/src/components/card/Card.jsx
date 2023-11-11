const Card = ({id, name, sprites, hp, atk, def, spd, spAtk, spDef, height, weight, type}) =>{
    return(
        <div>
            <img src={sprites} alt={`${name} sprite`} />
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Type: {type}</p>
            <div>
                <p>HP: {hp}</p>
                <p>Attack: {atk}</p>
                <p>Defense: {def}</p>
                <p>Speed: {spd}</p>
                <p>Special Attack: {spAtk}</p>
                <p>Special Defense: {spDef}</p>
            </div>
            <p>Height: {height} m</p>
            <p>Weight: {weight} kg</p>
        </div>
    )
}

export default Card