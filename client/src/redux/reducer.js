import { GET_POKEMON_BY_NAME, ALL_POKEMONS,GET_TYPES, FILTER, FILTER_BY_TYPE, ORDER_ALF, ORDER_ATK } from "./actions-type";

const initialState = {
    allPokemons: [],
    pokemonsTypes: [],
    pokemonByName: [],
    pokemonsFilters: []
}

const reducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case ALL_POKEMONS:
            return{
                ...state,
                allPokemons: payload
            }

        case GET_TYPES: 
            return{
                ...state,
                pokemonsTypes: payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                pokemonByName: payload
            }
        case FILTER:
            let filterade;
            if(payload === true){
                filterade = state.allPokemons.filter(
                    (pokemon) => !Number.isInteger(pokemon.id)
                )
            }else if (payload === "false") {
                filterade = state.allPokemons.filter((pokemon) =>
                  Number.isInteger(pokemon.id)
                );
            }
            return{
                ...state,
                pokemonsFilters: filterade
            }

        case FILTER_BY_TYPE:
            if(isNaN(payload)) return state
            const filteradeByType = state.allPokemons.filter((pokemon) => pokemon.types.some((type) => payload === type.id))

            return{
                ...state,
                pokemonsFilters: filteradeByType
            }
    
        default:
            return{
                ...state
            }
    }
}

export default reducer;