import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { LoginContext } from '../contexts/loginContext'

const AdminRoute = ({ component: Component, ...rest }) => {
    const {adminData}=useContext(LoginContext);

    return (
        <Route 
        {...rest}
            component={(props) => (
                !!adminData.token ?
                    <Component {...props} />
                    : <Redirect to={{ pathname: "/login" }} />
            )}
        />
    )
}

export default AdminRoute
