import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

import EndOfSem from '../../assets/EndOfSemFlyer.jpg';


const Schedule = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <header className="masthead5">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead5-heading">Upcoming Schedule</div>
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
                            <p>Our final event of the semester to brainstorm ideas for possible projects to pursue next semester. Stay tuned for more exciting workshops hosted by MakeBC!</p>
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