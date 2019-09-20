import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home'
import CreateAccount from './components/create'
import Login from './components/login'
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from "react-router-dom";
import LoginstateProvider from './Provider'

const app = (
    <LoginstateProvider>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/createaccount" component={CreateAccount}/>
            </div>
        </Router>
    </LoginstateProvider>
    
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
