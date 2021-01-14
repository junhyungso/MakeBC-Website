import React, { useEffect } from 'react';
import NavBar from '../navbar/navbar';
import MicrosoftPics from '../../assets/microsoft.jpg';
import Footer from '../footer/footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div>
            <header className="masthead6">
                <NavBar color="navbar navbar-expand-lg navbar-dark navbar-shrink"/>
                <div className="containerMain">
                    <div className="masthead6-heading ">Contact Us</div>
                    <br/>
                </div>
            </header>
            <div>
                        <h2 className="section-heading text-uppercase">Get in Touch</h2>
                    </div> 
            <div className="py-5">
                <div className="container">
                    <div className="row">
                            <div className="col-8">
                                <p>If you’re interested in our mission and would like to join us on our new journey, please be sure to signup for our mailing list to stay up-to-date with our latest events and activities!</p>
                                <p>
                                    <a href="https://facebook.us20.list-manage.com/subscribe?u=234b1451652fea6271321ffbf&id=4351847d43" target="_blank"> Sign up here </a>
                                </p>
                                <p>140 Commonwealth Ave. Chestnut Hill MA United States 02467</p>
                                <p>makebcclub@gmail.com</p>
                            </div>
                            <div className="col-4">
                                <img src={MicrosoftPics} alt="" width="100%"></img>
                            </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>

    )
}

export default Contact;