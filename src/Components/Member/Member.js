import React, { Component } from 'react';
import config from '../../config';
import Loader from '../Loader/Loader';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';
import OrdersList from '../OrdersList/OrdersList';
import Order from '../Order/Order';

export default class Member extends Component {

    constructor(props) {

        super(props);

        this.state = {
            order: {},
            user: {},
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

    setUserData = data => {
        this.setState({
            user: data
        })
    }

    setOrderData = data => {
        this.setState({
            order: data
        })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
    }


    fetchorder = (orderid) => {
        fetch(config.API_ENDPOINT + 'order/' + orderid, {
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
                this.setOrderData(data)
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    fetchuser = (userid) => {
        fetch(config.API_ENDPOINT + 'user/' + userid, {
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
                this.setUserData(data);
            })
            .catch(error => {
                this.setState({ error })
            })
    }


    markascompleted = (orderid) => {

    }

    generateorderinfo = () => {
        if (this.state.order !== undefined) {
            return (
                <div className="col-2">
                    <h3>Order</h3>
                    <Order order={this.state.order} user={this.state.user} />
                </div>
            )
        }
    }

    componentDidMount() {
        this.setIsLoading();
        this.setOrderData(this.fetchorder(2))
        this.setUserData(this.fetchuser(1))
    }

    render() {

        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"User Information"} />
            );
        }
        else {
            return (
                <div className="light">
                    <div className="column content">
                        <div className="row center">
                            <div className="col-1">
                                <h1>Welcome member</h1>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-2">
                                <h3>Current Orders</h3>
                                <OrdersList shopid={this.state.userid} />
                            </div>
                            {this.generateorderinfo()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

