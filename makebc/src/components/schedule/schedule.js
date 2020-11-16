import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';

const Schedule = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <header className="masthead4">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead4-heading ">Upcoming Schedule</div>
                    <br/>   
                </div>
            </header>
        </div>
    )
}


export default Schedule;