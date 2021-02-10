import React, { Component } from 'react';
import config from '../../config';
import Loader from '../Loader/Loader';
import { Redirect } from 'react-router-dom';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';
import Modal from '../Modal/Modal';

export default class OrderList extends Component {


    constructor(props) {

        super(props);

        this.state = {
            order: this.fetchorder(this.props.match.params.orderid),
            user: {},
            userid: engine.decrypt(read_cookie(config.cookie_key)),
            currentuser: {},
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
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
                this.toggleModal.bind(this)
        )

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

    componentDidMount() {  
        this.fetchcurrentuser(this.state.userid)
        this.setState({ isLoading: false })
    }

    showbuttons() {
        if (this.state.currentuser.userrole === "Member" || this.state.currentuser.userrole === "Admin") {
            return (
                <div className="row content">
                    <div className="col-1">
                        <button id="btnBack" className="black" type="submit" onClick={this.goback}>Back</button>
                        <button id="btnMarkCompleted" className="black" type="submit" onClick={this.markcompleted}>Mark Completed</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="row content">
                    <div className="col-1">
                        <button id="btnBack" className="black" type="submit" onClick={this.goback}>Back</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"User Information"} />
            );
        }
        else {
            if (this.state.order !== undefined & this.state.user !== undefined) {
                return (

                    <div className="light">
                        <div className="column content">
                            <div className="row content">
                                <div className="col-1">
                                    <h3>User Information</h3>
                                    <p>Name:{this.state.user.username}</p>
                                    <p>Email:{this.state.user.useremail}</p>
                                    <p>Phone:{this.state.user.userphone}</p>
                                </div>
                            </div>
                            <div className="row content">
                                <div className="col-1">
                                    <h3>Order Information</h3>
                                    <p>Order:{this.state.order.orderdata}</p>
                                    <p>Date:{this.state.order.orderdate}</p>
                                    <p>DateCompleted:{this.state.order.orderdatecompleted}</p>
                                </div>
                            </div>
                            {
                                this.showbuttons()
                            }
                        </div>
                        {this.state.showModal ?
                            <Modal
                                text='Order Completed'
                                closeModal={this.toggleModal.bind(this)}
                            />
                            : null
                        }
                    </div>
                )
            }
            else {
                return (
                    <div className="light">
                        <div className="column content">
                            <div className="row content">
                                <div className="col-1">
                                    <h3>User Information</h3>
                                    <p>Name:</p>
                                    <p>Email:</p>
                                    <p>Phone:</p>
                                </div>
                            </div>
                            <div className="row content">
                                <div className="col-1">
                                    <h3>Order Information</h3>
                                    <p>Order:</p>
                                    <p>Date:</p>
                                    <p>DateCompleted:</p>
                                </div>
                            </div>
                            {
                                this.showbuttons()
                            }
                        </div>
                    </div>
                )
            }
        }
    }
}