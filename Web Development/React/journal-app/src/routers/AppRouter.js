import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                dispatch(startLoadingNotes(user.uid));
                setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        });
    }, [dispatch, setIsLoading, setIsAuthenticated]);

    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        );
    }

    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        isAuthenticated={ isAuthenticated } 
                        path="/auth"
                        component={ AuthRouter }
                    />
                    <PrivateRoute
                        isAuthenticated={ isAuthenticated } 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />
                    <Redirect to="auth/login" />
                </Switch>
            </>
        </Router>
    )
}
