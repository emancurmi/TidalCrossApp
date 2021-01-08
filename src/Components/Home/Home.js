import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

import './Home.css';

export default class Home extends Component {

    nextPath(path) {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="column center">
                <div className="linear-dark">
                    <div className="row center">
                        <div className="col-2">
                            <img alt="logo" src="logo.png" style={{ "width": "100%" }} />
                        </div>
                        <div className="col-2">
                            <div className="column">
                                <div className="col-1">
                                    <h1>Our App</h1>
                                    <div className="row center spacebetween">
                                        <button className="clear">About Us</button>
                                        <button className="blue" onClick={() => this.nextPath('/SignUp')}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark">
                    <div className="row content">
                        <div className="col-3">
                            <h4>Our Idea</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-3">
                            <h4>Statistics</h4>
                            <h5>Downloaded: 200 Times<br/>Reviews: 4.5/5 Stars</h5>
                        </div>
                        <div className="col-3">
                            <h4>Saved Button Clicked</h4>
                            <h5>300</h5>
                            <button className="blue">Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="breaker"></div>
                <div className="light">
                    <div className="column content">
                        <div className="row center">
                            <h1 className="col-1">Idea</h1>
                            <h4 className="col-1">Why Choosing Our App?</h4>
                        </div>
                        <div className="row">
                            <p className="col-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="col-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="dark">
                    <div className="column content">
                        <div className="row center">
                            <h1 className="col-1">The Developer</h1>
                            <h4 className="col-1">Experience & Know-How</h4>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="breaker"></div>
                <div className="light">
                    <div className="column content">
                        <div className="row center">
                            <h1 className="col-1">Reviews</h1>
                            <h4 className="col-1">Endorsments</h4>
                        </div>
                        <div className="row">
                            <p className="col-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="col-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="white">
                    <div className="column content">
                        <div className="row center">
                            <h1 className="col-1">Download Now</h1>
                            <h4 className="col-1">Join Us! Change The World</h4>
                        </div>
                        <div className="row">
                            <p className="col-2">Guardian Ride is an app based on the requirement of the user knowing the driver in person or through a firend our drivers are not anyone of the street, our drivers are the ones you choose to pick you up.</p>
                            <p className="col-2">As the app is still in its initial phases we still advise you to use responsibly and always check whos is the driving.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}