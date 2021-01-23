import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import config from '../../config';
import User from '../User/User';
import Member from '../Member/Member';
import Admin from '../Admin/Admin';

export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            user: {
                role: "member"
            },
            config: config,
            error: null,
            isLoading: true,
        }
    }

    renderRedirect = () => {
        //if (read_cookie(config.cookie_key).length === 0) {
        //    return <Redirect to='/SignIn/' />
        //}
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

    componentDidMount() {
        this.renderRedirect()
    }

    render() {
        return (
            this.renderui()
        )
    }
}