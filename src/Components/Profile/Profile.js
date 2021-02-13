import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';

export default class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            //userid: engine.decrypt(read_cookie(config.cookie_key)),
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    renderRedirect = () => {
        console.log(read_cookie(config.cookie_key).length);
        if (read_cookie(config.cookie_key).length === 0) {
            return <Redirect to='/SignIn/' />
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

    render() {
        this.renderRedirect()
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Profile Information"} />
            );
        }
        else {
            return (
                <div className="column center">
                    <h1>Profile Page</h1>
                </div>
            )
        }
    }
}