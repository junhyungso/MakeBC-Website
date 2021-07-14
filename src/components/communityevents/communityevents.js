import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

import MicrosoftPics3 from '../../assets/microsoft3.jpg';
import WorkshopPics from '../../assets/workshop.jpg';
import artPics from '../../assets/art.png';

const CommunityEvents = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div>
            <header className="masthead3">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead3-heading ">Community Events</div>
                    <br/>
                </div>
            </header>
            <div className="py-5">
                <div className="container">
                    <div>
                        <h2 className="section-heading text-uppercase">Girl Scouts</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={WorkshopPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>MakeBC members assisted Prof. Gallaugher in teaching Girl Scouts fundamentals of code using Microsoft MakeCode and Raspberry Pi’s! They learned how to code different lights into LED light strips!</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Microsoft NERD Campus Visit</h2>
                    </div> 
                    <div className="row">
                        <div className="col-8">
                            <p>Microsoft partnered with MakeBC, Boston College’s first engineering club, to continue to work on GiGiFIT, “a virtual AI-enabled coach to guide individuals through key exercises that makes PT fun and easy, so that every individual with Down Syndrome feels empowered to reach their fitness goals”. This hack was created by a team at Microsoft and at Gigi’s Playhouse (linked below) aimed to help improve the lives of children with Down syndrome. This initiative and partnership was pulled together to also encouraging underrepresented students in tech to work alongside Microsoft’s engineers

                            After months of planning, we were so happy to see everything come together and to work on a wonderful project that utilizes technology for the social good. Unfortunately due to COVID, we have had to postpone the partnership. We hope to resume when in person events continue.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={MicrosoftPics3} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="section-heading text-uppercase">Arts Festival </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid d-block mx-auto" src={artPics} alt="" />
                        </div>
                        <div className="col-8">
                            <p>MakeBC partnered with Arts Fest, an annual arts festival at Boston College to display artwork that combined both technology and art together. We created an interactive painting and collaborated with our engineers and Boston College artist, Heather Denihan. When someone presses the painting, it will correspond to a musical sound. This was made using an arduino, bare conductive paint and copper tape and coded in Python. Special thanks to Prof. Gallaugher, MakeBC’s club advisor for guiding us on one of our favorite projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    )

}


export default CommunityEvents;