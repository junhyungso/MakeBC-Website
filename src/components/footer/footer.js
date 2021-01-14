import React from 'react';

const footer = () => (
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left"></div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/bc_make?s=20" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/makebc20/"target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/makebc.club/" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="col-lg-4 text-lg-right">
                    Copyright © MakeBC 2020
                </div>
            </div>
        </div>
    </footer>
)

export default footer;