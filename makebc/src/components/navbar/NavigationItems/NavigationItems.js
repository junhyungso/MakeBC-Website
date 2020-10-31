import React from 'react';
import css from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => (
    <ul className={css.NavigationItems}>
        <NavigationItem link='/' exact>Home</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
        <NavigationItem link='/projects'>Projects</NavigationItem>
        <NavigationItem link='/upcomingevents'>Upcoming Events</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>

    </ul>
)


export default NavigationItems;
