import React from 'react';
import css from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={css.NavigationItem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={css.active}> {props.children} </NavLink>
    </li>
);

export default navigationItem;  