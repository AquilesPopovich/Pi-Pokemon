import { allPokemons } from "./actions";
import { GET_POKEMON_BY_NAME,GET_POKEMON_BY_ID, ALL_POKEMONS,GET_TYPES, FILTER, FILTER_BY_TYPE, ORDER_ALF, ORDER_ATK } from "./actions-type";

const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    pokemonsTypes: [],
    pokemonByName: [],
    orderBy: null,
    pokemonByID: []
}

const reducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case ORDER_ALF:
      let orderByAlf;

      if (payload === "Ascendente") {
        orderByAlf = [...state.allPokemons].sort((a, b) => a.name.localeCompare(b.name));
      } 
      if (payload === "Descendente") {
        orderByAlf = [...state.allPokemons].sort((a, b) => b.name.localeCompare(a.name));
      }
      if(payload === "All"){
        orderByAlf= [...state.allPokemons]
      }

      return {
        ...state,
        allPokemonsCopy: orderByAlf,
        orderBy: "ALF"
      };

    case ORDER_ATK:
      const orderByAtk = [...state.allPokemons].sort((a, b) => {
        const atkA = Number(a.atk);
        const atkB = Number(b.atk);

        if (payload === "AtkAscendente") return atkB - atkA;
        else return atkA - atkB;
      });

      return {
        ...state,
        allPokemonsCopy: orderByAtk,
        orderBy: "ATK"
      };
        
        case ALL_POKEMONS:
            return{
                ...state,
                allPokemons: payload,
                allPokemonsCopy: payload
            }

        case GET_TYPES: 
            return{
                ...state,
                pokemonsTypes: payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                allPokemonsCopy: payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonByID: payload
            }
        case FILTER:
            const pokeApi = state.allPokemons

            const createFilter = (payload === 'Exist') ? pokeApi.filter(pokemon => pokemon.createInDb === 'false') : (payload === 'Created') ? pokeApi.filter((pokemon) => pokemon.createInDb === true)
            : pokeApi

            return{
                ...state,
                allPokemonsCopy: createFilter || pokeApi,
                pokemonsFilters: (payload === "AllPokemons")? [] : [payload]            
            }

        case FILTER_BY_TYPE:
            
            const filteredByType =  (payload === 'All')? state.allPokemons: state.allPokemons.filter((pkmn) =>
        pkmn.types.some((type) => payload === type.name)
      );

            return{
                ...state,
                allPokemonsCopy: filteredByType
            }
    
        default:
            return{
                ...state
            }
    }
}

export default reducer;