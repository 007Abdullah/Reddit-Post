import Login from './components/login/login'
import Dashboard from './components/Dashboard/dashboard'
import Signup from './components/signup/signup'
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return (
        <>
            {/* <Login />
            <Dashboard />
            <Signup /> */}

            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Signup</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>

                </nav>
                <Switch>
                    <Route exact path="/">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>

        </>
    )
}

export default Main;