import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'
import Footer from '../components/Footer';
import BackGroundWebGL from '../components/BackGroundWebGL';
import ScrollBar from '../components/ScrollBar';
import Shop from '../components/shop/Shop';
import LoginContextProvider from '../contexts/loginContext';
import LoginPage from '../components/login/Login';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import Page404 from '../components/Page404';

const AppRoute = () => {
    return (
            <BrowserRouter>
                <LoginContextProvider>
                    <BackGroundWebGL />
                    <ScrollBar />
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={Home} />
                        <UserRoute path='/login' component={LoginPage} />
                        <AdminRoute path="/shop" component={Shop} />
                        <Route path="*" component={Page404} />
                    </Switch>
                    <Footer />
                </LoginContextProvider>
            </BrowserRouter>
        
    )
}

export default AppRoute

