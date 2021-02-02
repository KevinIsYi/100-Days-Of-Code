import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

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
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={ChatPage} />
                    
                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
