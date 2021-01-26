import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../../config';
import engine from '../../engine';
import User from '../User/User';
import Member from '../Member/Member';
import Admin from '../Admin/Admin';
import { read_cookie } from 'sfcookies';



export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            config: config,
            error: null,
            isLoading: true,
            user: {
                userid: engine.decrypt(read_cookie(config.cookie_key)),
                userrole: ""
            },
        }
    }

    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length === 0) {
            return <Redirect to='/SignIn/' />
        }
    }

    loaduser = () => {
        console.log(this.state.user.userid);
        fetch(this.state.config.API_ENDPOINT + 'user/' + this.state.user.userid , {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.state.config.API_TOKEN}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })

            .then(data => {
                if (data.length !== 0) {
                    this.setState({
                        user: {
                            userrole: data[0].userrole
                        }
                    })
                }
                else {
                    this.setState({ error: "User not found!" });
                }
            })

            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }
    renderui = () => {
        this.renderRedirect();
        this.loaduser();
        if (this.state.user.userrole === "user") {
            return (<User />);
        }
        else if (this.state.user.userrole === "member") {
            return (<Member />);
        }
        else if (this.state.user.userrole === "admin") {
            return (<Admin />);
        }
    }

    render() {
        return (
            this.renderui()
        )
    }
}