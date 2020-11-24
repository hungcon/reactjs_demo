import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignOut from './SignOut';

export default function App() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/sign-out" exact component={SignOut}/>
        </Switch>
    );
};