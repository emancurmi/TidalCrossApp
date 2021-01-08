import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../../config';
import engine from '../../engine';
import { bake_cookie, read_cookie } from 'sfcookies';

export default class SignIn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            config: config,
            error: null,
            isLoading: true,
        }
    }

    renderui = () => {
        if (this.state.user.role === "user") {
            return (<User />);
        }
        else if (this.state.user.role === "member") {
            return (<Member />);
        }
        else if (this.state.user.role === "admin") {
            return (<Admin />);
        }
    }

    render() {
        return (
            {renderui}
        )
    }
}