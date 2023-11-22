import { Route, Routes, useLocation} from 'react-router-dom'
import { useState, useEffect} from 'react';
import Landing from './components/landing/Landing';
import Form from './components/form/Form';
import Cards from './components/cards/Cards'
import Nav from './components/Nav/Nav';
import Detail from './components/detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, allPokemons, getPokemonByName } from './redux/actions';
import style from './App.css'
import axios from 'axios';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  let pokemons = useSelector((state)=>state.allPokemonsCopy)
  
  const id = location.pathname.split("/").at(-1);

  const onSearch = (name) => {
    dispatch(getPokemonByName(name));  
    
  };

  const newPokemon= async(pokemon) =>{
    const url = 'http://localhost:3001/pokemons'
    try {
       const response = await axios.post(url, pokemon)
        console.log(response)
       if (response.status === 200) {
         alert(response.data.message)
        }
      } 
      catch (error) {
        
      if(error.response.status === 404){
        alert(error.response.data)
      }
  }
}

  

  useEffect(() =>{
    const fetchData = async() =>{
      try {
       await dispatch(getTypes());
       await dispatch(allPokemons())
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dispatch])

 



  return (
    <div className={style.container}>
      {
        
        ( location.pathname !== `/detail/${id}` && location.pathname !== "/" ) && <Nav onSearch={onSearch} /> 
            
         }
       
       <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Cards isLoading={isLoading} pokemons={pokemons} />} />
          <Route path='/form' element={<Form newPokemon={newPokemon} />} />
          <Route path='/detail/:id' element={<Detail setIsLoading={setIsLoading} isLoading={isLoading} />} />

       </Routes>
       

    </div>
  );
}

export default App;
