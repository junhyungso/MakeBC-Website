import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Arrow from '../../assets/arrow.png';
import Footer from '../footer/footer';

import MicrosoftPics from '../../assets/microsoftsEDITED.jpg';
import MicrosoftPics2 from '../../assets/microsoft2.jpg';
import MicrosoftPics4 from '../../assets/microsoft4.jpg';
import WorkshopPics from '../../assets/workshop.jpg';
import FlashlightPics from '../../assets/flashlight.jpg';
import ThreeDPrintPics from '../../assets/3dprint.jpg';
import CPXPics from '../../assets/cpx.jpg';
import RobotPics from '../../assets/robots.jpg';
import Wires from '../../assets/wiresEDITED.jpg';
import LEDWorkshop from '../../assets/ledstrips.jpg';



const MainPage = () => {
    return (
        <div>
            <header className="masthead">
                <NavBar color="navbar navbar-expand-lg navbar-dark"/>
                <div className="containerMain">
                    <div className="masthead-heading ">Welcome to MakeBC!</div>
                    <div className="masthead-subheading">The first engineering club at Boston College</div>
                    <NavLink className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to='/about'>Learn More</NavLink>
                    <br/>
                </div>
                <img src={Arrow} alt="" className="arrow"></img>
            </header>

            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Creativity • Collaboration • Innovation</h2>
                        <br />
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h4 className="my-3">Our Workshops</h4>
                            {/* <span className="fa-stack fa-4x"> */}
                             <NavLink to='/workshops'>  
                                <img src={Wires} alt="" className="clubImage"></img>
                            </NavLink>
                                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                            {/* </span> */}
                            <p></p>
                            <p className="text-muted">MakeBC hosts bi-weekly workshops run by both professors and students to engage BC students with engineering experiences. Click above to learn more about the kinds of workshops we have worked on.</p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="my-3">Community Events</h4>
                            {/* <span className="fa-stack fa-4x"> */}
                            <NavLink to='/communityevents'>  
                                <img src={MicrosoftPics} alt="" className="clubImage"></img>
                            </NavLink>
                                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
                            {/* </span> */}
                            <p></p>
                            <p className="text-muted">MakeBC fosters the engagement with the wider community, through the mission of making engineering accessible to all. Click above to learn more about how we contribute to the community.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <div>
                <h2>Gallery</h2>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={WorkshopPics} alt="" />
                        </div> 
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={MicrosoftPics2} alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={LEDWorkshop} alt="" />
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={MicrosoftPics4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
}


export default MainPage;