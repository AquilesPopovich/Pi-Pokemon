import { Route, Routes, useLocation} from 'react-router-dom'
import { useState, useEffect} from 'react';
import Landing from './components/landing/Landing';
import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, allPokemons, getPokemonByName } from './redux/actions';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const pokemons = useSelector((state)=>state.allPokemons)


  const onSearch = async (name) => {
    try {
      await dispatch(getPokemonByName(name));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error(`No se encontró el recurso para el nombre: ${name}`);
      } else {
        console.error(`Error desconocido: ${error.message}`);
      }
    }
  };

  console.log(pokemons)

  useEffect(() =>{
    dispatch(getTypes());
    dispatch(allPokemons())
  }, [dispatch])



  return (
    <div>
      {
            location.pathname !== '/'  && <Nav onSearch={onSearch} /> 
         }
       <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Cards isLoading={isLoading} pokemons={pokemons} />} />
          <Route path='/form' />
          <Route path='/detail/:id' element={<Detail/>} />

       </Routes>
    </div>
  );
}

export default App;
