import React, { Component } from 'react';
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';
import engine from '../../engine';

export default class OrderDetails extends Component {

    constructor(props) {

        super(props);

        this.state = {
            order: this.fetchorder(new URLSearchParams(window.location.search).get('orderid')),
            user: {},
            userid: engine.decrypt(read_cookie(config.cookie_key)),
            currentuser: {},
            error: null,
            isLoading: true,
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    setUserData = data => {
        this.setState({
            user: data
        })
    }

    setCurrentUserData = data => {
        this.setState({
            currentuser: data
        })
    }

    setOrderData = data => {
        this.setState({
            order: data
        })
        this.fetchuser(this.state.order.orderuserid);
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

    fetchcurrentuser = (userid) => {
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
                this.setCurrentUserData(data);
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    markcompleted = () => {
        this.setIsLoading(true);

        const order = {
            orderstatus: "Completed",
        }

        fetch(config.API_ENDPOINT + `order/${this.state.order.orderid}`, {
            method: 'PATCH',
            body: JSON.stringify(order),
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${config.API_TOKEN}`
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error))
            })

            .then(
                this.setIsLoading(false)
            )

            .catch(error => {
                this.setState({ error })
            })
    }

    goback = () => {
        this.props.history.push('/dashboard');
    }

    showbuttons() {
        console.log(this.state.currentuser);
        if (this.state.currentuser.userrole === "member" || this.state.currentuser.userrole === "admin") {
            return (
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"><button type="button" class="btn btn-link" onClick={this.goback}><i class="icon-chevron-left mr-2"></i> Back</button></li>
                    <li className="list-inline-item"><button type="button" class="btn btn-success btn-sm" onClick={this.markcompleted}>Completed</button></li>
                </ul>
            )
        }
        else {
            return (
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"><button type="button" class="btn btn-link" onClick={this.goback}><i class="icon-chevron-left mr-2"></i> Back</button></li>
                </ul>
            )
        }
    }

    fillOrderInformation() {
        return (
            <div className="card">
                <div className="card-header bg-light d-flex justify-content-between">
                    <span className="font-size-sm text-uppercase font-weight-semibold">Order Information <a href="#">[#{this.state.order.orderid}]</a></span>
                    <span className="font-size-sm text-uppercase text-success font-weight-semibold">{this.state.order.orderdate}</span>
                </div>

                <div className="card-body">
                    <p className="card-text">{this.state.order.orderdata}</p>
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <span className="text-muted">{this.state.order.orderdatecompleted}</span>
                    {this.showbuttons()}
                </div>
            </div>
        )
    }

    fillUserInformation() {
        return (
            <div className="card">
                <div className="card-header bg-light d-flex justify-content-between">
                    <span className="font-size-sm text-uppercase font-weight-semibold">User Information</span>
                </div>
                <div className="card-body">
                    <p className="card-text">Name: {this.state.user.username} </p>
                    <p className="card-text">Email: {this.state.user.useremail}</p>
                    <p className="card-text">Phone: {this.state.user.userphone}</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.fetchcurrentuser(this.state.userid)
        this.setState({ isLoading: false })
    }

    

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"User Information"} />
            );
        }
        else {
            if (this.state.order !== undefined) {
                return (
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-xl-6">
                                    {this.fillUserInformation()}
                                </div>
                                <div className="col-xl-6">
                                    {this.fillOrderInformation()}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header header-elements-sm-inline">
                                            <h6 className="card-title">Order Not Found</h6>
                                            <div className="header-elements"></div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">We have encountered an error order can't be found.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

