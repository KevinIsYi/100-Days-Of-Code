import React from 'react';
import { /*Link,*/ NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
                    <NavLink activeClassName="active" className="nav-link" exact to="/about">About</NavLink>
                    <NavLink activeClassName="active" className="nav-link" exact to="/login">Login</NavLink>

                    {/* 
                    <Link activeClassName="active" className="nav-link" to="/">Home</Link>
                    <Link activeClassName="active" className="nav-link" to="/about">About</Link>
                    <Link activeClassName="active" className="nav-link" to="/login">Login</Link>
                     */}

                </div>
            </div>
        </nav>
    )
}
