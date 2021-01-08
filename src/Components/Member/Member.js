import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import engine from '../../engine';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';

export default class Member extends Component {

    constructor(props) {

        super(props);

        this.state = {
            config: config,
            userid: engine.decrypt(read_cookie(config.cookie_key)),
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length !== 0) {
            return <Redirect to='/Dashboard/' />
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
                <Loader loadingtype={"Loading User Information"} />
            );
        }
        else {
            return (
                <div className="column center">

                </div>
            )
        }
    }
}

