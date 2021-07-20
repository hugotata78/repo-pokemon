import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'

const Routes = ()=>{
    return(
        <Switch>
            <Route path='/' component={Pokedex} />
        </Switch>
    )
}

export default Routes