import Cards from "../cards/Cards"
import Filters from '../filters/Filters'

const Home = ({ isLoading, pokemons }) =>{
    return(
        <div>
        <Filters />
        <Cards isLoading={isLoading} pokemons={pokemons}/>
        </div>
    )
}
export default Home