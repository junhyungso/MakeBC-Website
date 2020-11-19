import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../assets/MakeBCLogo.png';

const Navbar = (props) => (

    <div>
        <nav className={props.color} id="mainNav">
            <NavLink className="navbar-brand js-scroll-trigger" to="/" ><img className="logoMargin" src={Logo} alt="" /></NavLink>
            <button className="navbar-toggler navbar-toggler-right" onClick={()=>{document.getElementById("Dropdown").classList.toggle("show");}}>
                Menu
                <i className="fas fa-bars ml-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="Dropdown">
                <NavigationItems />
            </div>
        </nav>
        </div>
)


export default Navbar;
