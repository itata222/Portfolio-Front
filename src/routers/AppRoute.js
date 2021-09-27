import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'
import TasksContextProvider from '../contexts/tasksContext';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import BackGroundWebGL from '../components/BackGroundWebGL';
import ScrollBar from '../components/ScrollBar';

const AppRoute = () => {
    return (
            <BrowserRouter>
                <TasksContextProvider>
                    <BackGroundWebGL />
                    <ScrollBar />
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={Home} />
                    </Switch>
                    <Footer />
                </TasksContextProvider>
            </BrowserRouter>
        
    )
}

export default AppRoute

