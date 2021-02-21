import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
//import config from '../../config';
import Loader from '../Loader/Loader';
//import { read_cookie } from 'sfcookies';

export default class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
    }

    componentDidMount() {
        this.setIsLoading(false);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Contact Information"} />
            );
        }
        else {
            return (
                <div className="column center">


                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title">About Us</h6>
                                </div>

                                <div className="card-body">
                                    Basic card example without header elements
							</div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="card">
                                <div className="card-header header-elements-inline">
                                    <h6 className="card-title">Contact Us</h6>
                                </div>

                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <label>Your name:</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Your E-mail:</label>
                                            <input type="email" className="form-control" placeholder="Enter your e-mail address" />
                                        </div>

                                        <div className="form-group">
                                            <label>Your message:</label>
                                            <textarea rows="3" cols="3" className="form-control" placeholder="Enter your message here"></textarea>
                                        </div>

                                        <div className="d-flex justify-content-end align-items-center">
                                            <button type="submit" className="btn bg-blue ml-3">Submit <i className="icon-paperplane ml-2"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            )
        }
    }
}