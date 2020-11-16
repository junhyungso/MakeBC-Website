import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';

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
import LEDWorkshop2 from '../../assets/ledstrips2.jpg';


const Workshops = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <header className="masthead2">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead2-heading ">Workshops</div>
                    <br/>
                </div>
            </header>
            <div className="py-5">
                <div className="container">
                    <div>
                        <h2 className="section-heading text-uppercase">Project 1</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={FlashlightPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Project 1</h2>
                    </div> 
                    <div className="row">
                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={LEDWorkshop2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Project 1</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={RobotPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Project 1</h2>
                    </div> 
                    <div className="row">
                        <div className="col-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={ThreeDPrintPics} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr />
        </div>
    )

}


export default Workshops;