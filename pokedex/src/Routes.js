import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex'
import ContainerDetails from './components/details/ContainerDetails'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Pokedex} />
            <Route path='/pokemon/:name' component={ContainerDetails}/>
        </Switch>
    )
}

export default Routes