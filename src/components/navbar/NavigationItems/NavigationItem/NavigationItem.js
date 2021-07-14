import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="nav-item">
        <NavLink className={props.css} to={props.link}> {props.children} </NavLink>
    </li>
);

export default navigationItem;  