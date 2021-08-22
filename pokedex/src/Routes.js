import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex'
import ContainerDetails from './components/details/ContainerDetails'
import ContainerPokeDetails from './components/searchPokemon/ContainerPokeDetails'
import Types from './components/Types/Types'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Pokedex} />
            <Route path='/pokemon/:name' component={ContainerDetails}/>
            <Route path='/search/:name' component={ContainerPokeDetails}/>
            <Route path='/type/:name' component={Types}/>
        </Switch>
    )
}

export default Routes