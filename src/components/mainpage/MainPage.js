import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Arrow from '../../assets/arrow.png';
import Footer from '../footer/footer';

import MicrosoftPics from '../../assets/microsoft.jpg';
import MicrosoftPics2 from '../../assets/microsoft2.jpg';
import MicrosoftPics4 from '../../assets/microsoft4.jpg';
import WorkshopPics from '../../assets/workshop.jpg';
import FlashlightPics from '../../assets/flashlight.jpg';
import ThreeDPrintPics from '../../assets/3dprint.jpg';
import CPXPics from '../../assets/cpx.jpg';
import RobotPics from '../../assets/robots.jpg';
import Wires from '../../assets/wires.jpg';
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
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
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
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
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