import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchBar = ({onSearch}) =>{
    const location = useLocation()
    const [value, setValue] = useState('')

    const onChange = (event) =>{
        setValue(event.target.value)
    }
    if(location.pathname === '/home'){
        return(
            <div>
                <input onChange={onChange} type="search" placeholder="aun no definido" />
                
                <button>Search</button>
            </div>
        )
    }
    
}

export default SearchBar