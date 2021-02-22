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
                        &copy; 2020. <a href="https://www.tidalcross.com">Tidal Cross</a> by <a href="https://orpyxis.com" target="_blank" rel="noreferrer">Orpyxis Technologies</a>
                    </span>
                    
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item"><a href="/termsconditions" className="navbar-nav-link">Terms and Conditions</a></li>
                        <li className="nav-item"><a href="/cookiepolicy" className="navbar-nav-link">Cookie Policy</a></li>
                        <li className="nav-item"><a href="/privacypolicy" className="navbar-nav-link">Privacy Policy</a></li>

                        {/*<li className="nav-item"><a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" className="navbar-nav-link font-weight-semibold"><span className="text-pink-400"><i className="icon-cart2 mr-2"></i> Purchase</span></a></li>*/}
                    </ul>
                    
                </div>
            </div>
        )
    }
}