import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    if (auth.checking) {
        return <h1>Por favor espere</h1>
    }
    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        isAuthenticated={auth.logged}
                        path="/auth"
                        component={ AuthRouter }
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        isAuthenticated={auth.logged}
                        component={ChatPage}
                    />
                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
