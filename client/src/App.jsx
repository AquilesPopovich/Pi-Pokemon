import { Route, Routes, useLocation} from 'react-router-dom'
import { useState, useEffect} from 'react';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Nav from './components/Nav/Nav';
import Detail from './components/detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, allPokemons, getPokemonByName } from './redux/actions';
import style from './App.css'

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  let pokemons = useSelector((state)=>state.allPokemonsCopy)


  const onSearch = (name) => {
    
      dispatch(getPokemonByName(name));
    
  };

  

  useEffect(() =>{
    dispatch(getTypes());
    dispatch(allPokemons())
    .then(()=>{
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
    })
  }, [dispatch])

 



  return (
    <div className={style.container}>
      {
            location.pathname !== '/'  && <Nav onSearch={onSearch} /> 
         }
       <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home isLoading={isLoading} pokemons={pokemons} />} />
          <Route path='/form' />
          <Route path='/detail/:id' element={<Detail setIsLoading={setIsLoading} isLoading={isLoading} />} />

       </Routes>
    </div>
  );
}

export default App;
