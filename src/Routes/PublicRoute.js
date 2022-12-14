import React from 'react'
import { Route,Redirect } from 'react-router-dom';

const PublicRoute = ({component:Component,...rest}) => {
    const token = localStorage.getItem('token');
    return(
      <Route  {...rest} render={(props)=> token ? <Redirect to='/home'></Redirect>:<Component {...props}/>}/>
    )
}

export default PublicRoute
