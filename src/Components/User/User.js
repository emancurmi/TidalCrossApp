import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';
import CreateOrderForm from '../CreateOrderForm/CreateOrderForm';
import engine from '../../engine';

export default class User extends Component {

    constructor(props) {

        super(props);

        this.state = {
            userid: engine.decrypt(read_cookie(config.cookie_key)),
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
                <Loader loadingtype={"User Information"} />
            );
        }
        else {
            return (
                <div className="column center">
                    <h1>Welcome User</h1>
                </div>
            )
        }
    }
}