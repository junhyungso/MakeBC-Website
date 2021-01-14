import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

import MicrosoftPics from '../../assets/microsoft.jpg';
import MicrosoftPics2 from '../../assets/microsoft2.jpg';
import MicrosoftPics4 from '../../assets/microsoft4.jpg';
import WorkshopPics from '../../assets/workshop.jpg';
// import FlashlightPics from '../../assets/flashlight.jpg';
import FlashlightPics from '../../assets/flashlight.png';
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
                        <h2 className="section-heading text-uppercase">LED Flashlight Workshop</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={FlashlightPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>Led by Kevin Qi, the workshop taughts studentsthe basics of circuits and LEDs and were able to gain some hands-on experience creating and designing a homemade flashlight.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">LED Music Light Strips Workshop</h2>
                    </div> 
                    <div className="row">
                        <div className="col-8">
                            <p>Combining our knowledge of JavaScript and Circuit Playground Express, MakeBC students were able to create a reactive music light strip that lit up based on the loudness of audio input.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={LEDWorkshop2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Robots Workshop</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={RobotPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>Through the help of Professor Gallaugher, students created Robot mobiles that could be controlled through an iOS app.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">3D Printing Workshop</h2>
                    </div> 
                    <div className="row">
                        <div className="col-8">
                            <p>Students learned the basics of 3D modeling through programmable softwares and got to experience printing their designs through a 3D printer.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={ThreeDPrintPics} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    )

}


export default Workshops;