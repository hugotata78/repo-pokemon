import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex'
import ContainerDetails from './components/details/ContainerDetails'
import ContainerPokeDetails from './components/searchPokemon/ContainerPokeDetails'
import Types from './components/Types/Types'
import Ability from './components/Ability/Ability'
import Container from './components/order/nameAZ/Container'
import ContainerZA from './components/order/nameZA/Container'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Pokedex} />
            <Route path='/pokemon/:name' component={ContainerDetails}/>
            <Route path='/search/:name' component={ContainerPokeDetails}/>
            <Route path='/type/:name' component={Types}/>
            <Route path='/ability/:name' component={Ability}/>
            <Route path='/order/nameA-Z' component={Container}/>
            <Route path='/order/nameZ-A' component={ContainerZA}/>
        </Switch>
    )
}

export default Routes