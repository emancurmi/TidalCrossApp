import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import OrderList from '../OrdersList/OrdersList';
import config from '../../config';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';

export default class Member extends Component {

    constructor(props) {

        super(props);

        this.state = {
            userid: engine.decrypt(read_cookie(config.cookie_key)),
            useremail: '',
            username: '',
            userrole: '',
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

    setUser() {
        fetch(config.API_ENDPOINT + 'user/' + this.state.userid, {
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

            .then(user => {
                if (user.length !== 0) {

                    this.setState({
                        userid: user[0].userid,
                        useremail: user[0].useremail,
                        userrole: user[0].userrole,
                        error: null,
                        isLoading: false,
                    })
                }
            })

            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    componentDidMount() {
        this.setUser();
        this.setIsLoading();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Member Information"} />
            );
        }
        else {
            return (
                <div className="column center">
                    <h1>Welcome Member</h1>
                    <OrderList />
                </div>
            )
        }
    }
}

