import React from 'react';
import css from './MainPage.module.css';
import NavBar from '../navbar/navbar';
import Engineering from '../../assets/engineering.jpg';
import Arrow from '../../assets/arrow.png';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <header className="masthead">
                <NavBar color="navbar navbar-expand-lg navbar-dark"/>
                <div className="containerMain">
                    <div className="masthead-heading ">Welcome to MakeBC!</div>
                    <div className="masthead-subheading">The first engineering club at Boston College</div>
                    <NavLink className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to='/about' >Learn More</NavLink>
                    <br/>
                </div>
                <img src={Arrow} className="arrow"></img>
            </header>

            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Creativity • Collaboration • Innovation</h2>
                        <br />
                        {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h4 className="my-3">Our Workshops</h4>
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="my-3">Communal Events</h4>
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    );
}


export default MainPage;