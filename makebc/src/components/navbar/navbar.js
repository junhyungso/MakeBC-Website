import React from 'react';
import css from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const navbar = () => {

    return (
        <header className={css.NavBar}>
            <div className={css.Logo}>
                <NavLink to="/">
                    <Logo />
                </NavLink>
            </div>
            <nav className={css.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>

    )

};


export default navbar;
