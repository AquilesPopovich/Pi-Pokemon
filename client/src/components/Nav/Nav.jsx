import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"


const Nav = ({onSearch}) =>{
    return(
        <div>
            <Link to='/home'><img src="" alt="" /></Link>
            <SearchBar onSearch={onSearch}/>
            <Link to='/form'><img src="" alt="" /></Link>
            <Link to='/'><img src="" alt="" /></Link>
        </div>
    )
}

export default Nav