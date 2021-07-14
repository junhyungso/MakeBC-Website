import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

const About = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div>
            <header className="masthead4">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead4-heading">About MakeBC</div>
                    <br/>
                </div>
            </header>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <div>
                            <p>
                            MakeBC is  club aiming to create a community of makers here at Boston College, through a plethora of activities and workshops on electrical engineering. We plan on creating interdisciplinary collaborations between technology and the arts here on campus, and you can expect to see and participate in: projects for the social good, robotics, 3D printing and design, visits to makerspaces, and much more!                            
                            </p>
                        </div>
                        <h3 className="section-subheading text-muted">MakeBC</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt=""></img></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2018</h4>
                                    <h4 className="subheading">MakeBC Founded</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">MakeBC was founded by a group of students dedicated to fostering an engineering environment that encourages creativity, collaboration and innovation.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt=""></img></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>November 2019</h4>
                                    <h4 className="subheading">Visit to Microsoft NERD Campus</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">MakeBC students visited Microsoft's campus and got exposed to a Microsoft's project GiGiFIT, “a virtual AI-enabled coach to guide individuals through key exercises that makes PT fun and easy, so that every individual with Down Syndrome feels empowered to reach their fitness goals”</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt=""></img></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>November 2020</h4>
                                    <h4 className="subheading">Present</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">We continue to brainstorm project ideas to express our knowledge and passion for engineering.</p></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src={Jolene} alt=""></img> */}
                            <h4>Jolene Lozano</h4>
                            <p className="text-muted">Co-President, Founder</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt=""></img> */}
                            <h4>Kim-An Quinn</h4>
                            <p className="text-muted">Co-President</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            {/* <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt=""></img> */}
                            <h4>Junhyung So</h4>
                            <p className="text-muted">Vice-President</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Kevin Qi</h4>
                            <p className="text-muted">Treasurer</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Shahzad Manji</h4>
                            <p className="text-muted">Internal Event Coordinator</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Mark Zhang </h4>
                            <p className="text-muted">Workshop Lead</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Sammi Wu </h4>
                            <p className="text-muted">Outreach Coordinator</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Nipuni Obe</h4>
                            <p className="text-muted">Head of Marketing</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Dana Salta</h4>
                            <p className="text-muted">Graphics Designer</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <h4>Slok Jariwala</h4>
                            <p className="text-muted">Freshmen Representative</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    )
}
export default About;