import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../../config';
import engine from '../../engine';
import User from '../User/User';
import Member from '../Member/Member';
import Admin from '../Admin/Admin';
import { read_cookie } from 'sfcookies';
import Loader from '../Loader/Loader';


export default class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            error: null,
            isLoading: true,
            user: {
                userid: engine.decrypt(read_cookie(config.cookie_key)),
                userrole: ""
            },
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length === 0) {
            return <Redirect to='/SignIn/' />
        }
    }

    fetchuser = () => {
        fetch(this.state.config.API_ENDPOINT + 'user/' + this.state.user.userid, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}`
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
                            userrole: data.userrole
                        }
                    })
                }
            })

            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
        this.setIsLoading(false);
    }

    renderui = () => {

        if (this.state.user.userrole === "user") {
            return (<p>User</p>);
        }
        else if (this.state.user.userrole === "member") {
            return (<Member />);
        }
        else if (this.state.user.userrole === "admin") {
            return (<Admin />);
        }
    }

    componentDidMount() {
        this.renderRedirect();
        this.fetchuser();
    }

    render() {
        if (this.state.isLoading | this.state.user.userrole === "") {
            return (
                <Loader loadingtype={""} />
            );
        }
        else {

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
    }
}