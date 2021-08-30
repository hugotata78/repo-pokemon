import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { orderByName } from "./actions/actionPokemon";


const store = createStore(rootReducers,

    composeWithDevTools(
        applyMiddleware(thunk)
    ))
store.dispatch(orderByName(0,1118,12))


export { store }