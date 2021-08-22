import { applyMiddleware, createStore } from "redux";
import {rootReducers } from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getAbilityPokemonById } from "./actions/actionPokemon";






const store = createStore(rootReducers,
    
    composeWithDevTools(
    applyMiddleware(thunk)
))



export { store }