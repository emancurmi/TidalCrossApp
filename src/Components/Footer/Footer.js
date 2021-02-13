import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="text-center d-lg-none w-100">
                    <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
                        <i className="icon-unfold mr-2"></i>
				Footer
			</button>
                </div>

                <div className="navbar-collapse collapse" id="navbar-footer">
                    <span className="navbar-text">
                        &copy; 2020. <a href="#">Tidal Cross</a> by <a href="http://orpyxis.com" target="_blank">Orpyxis Technologies</a>
                    </span>
                    {/*
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item"><a href="https://kopyov.ticksy.com/" className="navbar-nav-link" target="_blank"><i className="icon-lifebuoy mr-2"></i> Support</a></li>
                        <li className="nav-item"><a href="http://demo.interface.club/limitless/docs/" className="navbar-nav-link" target="_blank"><i className="icon-file-text2 mr-2"></i> Docs</a></li>
                        <li className="nav-item"><a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" className="navbar-nav-link font-weight-semibold"><span className="text-pink-400"><i className="icon-cart2 mr-2"></i> Purchase</span></a></li>
                    </ul>
                    */}
                </div>
            </div>
            //<div className="footer">
            //    <div className="dark">
            //        <div className="row content">
            //            <div className="column col-4">
            //                <h6>App Name</h6>
            //                <img src="logo.jpg" width="100" alt="Logo Container"/>
            //                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            //            </div>
            //            <div className="column col-4 center">
            //                <h6>News Letter Signup</h6>
            //                <form>
            //                    <input type="email" placeholder="E-mail" /><br />
            //                    <button className="blue">Sign Up</button>
            //                </form>
            //            </div>
            //            <div className="column col-4 center">
            //                <h6>Contact Us</h6>
            //                <form>
            //                    <input type="text" placeholder="Name" /><br />
            //                    <input type="email" placeholder="E-mail" /><br />
            //                    <input type="text" placeholder="Comment" rows="5" /><br />
            //                    <button className="blue">Submit</button>
            //                </form>
            //            </div>
            //            <div className="column col-4">
            //                <h6>Address</h6>
            //                <p>Guardian Ride Development<br />
            //                10880 Malibu Point,<br />
            //                Florida
            //                </p>
            //            </div>
            //        </div>
            //    </div>
            //    <div className="dark">
            //        <div className="row content">
            //        <div className="column col-1 center" >
            //            <p>Designed & Developed by Eman Curmi &copy;
            //            Copyright 2020</p>
            //            </div>
            //        </div>
            //    </div>
            //</div>
        )
    }
}