/*global google*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserRoute from './routes/UserRoute'

import Header from './components/shared/Header/Header.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import TaskManager from './components/TaskManager/TaskManager.jsx'
import TaskDetail from './components/TaskManager/TaskDetail/TaskDetail.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import PageNotFound from './components/shared/PageNotFound/PageNotFound.jsx'
import UserManager from './components/UserManager/UserManager.jsx'
import UserDetail from './components/UserManager/UserDetail/UserDetail.jsx' 
import Weather from './components/WeatherManager/Weather.jsx'
import WeatherDetail from './components/WeatherManager/WeatherDetail/WeatherDetail.jsx'
function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/login" />} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <UserRoute path="/tasks" exact component={TaskManager} />
                        <UserRoute path="/tasks/:id" component={TaskDetail} />
                        <UserRoute path="/users" exact component={UserManager}/>
                        <UserRoute path="/users/:id" component={UserDetail} />
                        <UserRoute path="/weather" exact component={Weather}/>
                        <UserRoute path="/weather/:dt/:city"  component={WeatherDetail} />
                        <Route path="/**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
