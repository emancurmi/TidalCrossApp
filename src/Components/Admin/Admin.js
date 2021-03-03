import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
//import config from '../../config';
import Loader from '../Loader/Loader';
//import { read_cookie } from 'sfcookies';

export default class Admin extends Component {

    constructor(props) {

        super(props);

        this.state = {
            //userid: engine.decrypt(read_cookie(config.cookie_key)),
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: false
        })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
    }

    componentDidMount() {
        this.setIsLoading();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Admin Information"} />
            );
        }
        else {
            return (
                <div className="light">
                    <div className="column content">
                        <div className="row center">
                            <div className="col-1">
                                <h1>Welcome Admin</h1>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-3">
                                <h3>Members</h3>
                            </div>
                            <div className="col-3">
                                <h3>Shops</h3>
                            </div>
                            <div className="col-3">
                                <h3>Orders</h3>
                            </div>
                            <div className="col-3">
                                <h3>Company Info</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

