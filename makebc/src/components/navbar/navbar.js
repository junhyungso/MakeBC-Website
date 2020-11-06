import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../assets/MakeBCLogo.png';

const navbar = (props) => {

    return (
        <div className="container">
            <nav className={props.color} id="mainNav">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/"><img src={Logo} alt="" /></NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ml-1"></i>
                    </button>
                    <NavigationItems />
                </div>
            </nav>
        </div>
    )

};


export default navbar;
