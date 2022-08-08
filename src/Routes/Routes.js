import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Error from '../Components/Error'
import Login from '../Components/Login'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../Components/Home'
import Touristlist from '../Components/Touristlist'


const Routes = (props) => {
  return (
    <div>
      <Switch>
        <PublicRoute  path='/' exact component={Login}/>
        <PrivateRoute path='/home' exact component={Home}/>
        <PrivateRoute path='/touristlist' exact component={Touristlist}/>
        <Route component={Error}/>
      </Switch>
    </div>
  )
}

export default Routes