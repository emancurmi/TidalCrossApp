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
                <div className="column center">
                    <h1>Welcome Admin</h1>
                </div>
            )
        }
    }
}

