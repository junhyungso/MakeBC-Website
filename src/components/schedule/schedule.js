import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

import WorkshopPics from '../../assets/workshop.jpg';
import EndOfSem from '../../assets/EndOfSemFlyer.jpg';


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
            <div className="py-5">
                <div className="container">
                    <div>
                        <h2 className="section-heading text-uppercase">End of Semester Meeting - November 23, 2020 7PM</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={EndOfSem} alt="" />
                        </div>
                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    )
}


export default Schedule;