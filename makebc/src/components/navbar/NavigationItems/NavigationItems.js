import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => (

    <ul className="navbar-nav text-uppercase ml-auto">
        <NavigationItem link='/about' css="nav-link js-scroll-trigger">About</NavigationItem>
        <NavigationItem link='/workshops' css="nav-link js-scroll-trigger">Workshops</NavigationItem>
        <NavigationItem link='/communityevents' css="nav-link js-scroll-trigger">Community Events</NavigationItem>
        <NavigationItem link='/schedule' css="nav-link js-scroll-trigger">Schedule</NavigationItem>
        <NavigationItem link='/contact' css="nav-link js-scroll-trigger">Contact</NavigationItem>
    </ul>

    
    // <ul className={css.NavigationItems}>
    //     <NavigationItem link='/' exact>Home</NavigationItem>
    //     <NavigationItem link='/about'>About</NavigationItem>
    //     <NavigationItem link='/projects'>Projects</NavigationItem>
    //     <NavigationItem link='/upcomingevents'>Upcoming Events</NavigationItem>
    //     <NavigationItem link='/contact'>Contact</NavigationItem>

    // </ul>
)


export default NavigationItems;
