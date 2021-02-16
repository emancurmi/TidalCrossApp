import React, { Component } from 'react';

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
        )
    }
}