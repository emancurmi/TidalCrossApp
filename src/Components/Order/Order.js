import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import config from '../../config';
import Loader from '../Loader/Loader';

export default class OrderList extends Component {


    constructor(props) {

        super(props);

        this.state = {
            order: this.props.order,

            user: this.props.user,

            error: null,
            isLoading: true,
            showModal: false
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    componentDidMount() {
        this.setState({ isLoading: false })
    }

    render() {
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
                        <div className="row content">
                            <div className="col-1">
                                <button id="btnBack" className="black" type="submit" onClick="">Back</button>
                                <button id="btnMarkCompleted" className="black" type="submit" onClick="">Mark Completed</button>

                            </div>
                        </div>
                    </div>
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
                        <div className="row content">
                            <div className="col-1">
                                <button id="btnBack" className="black" type="submit">Back</button>
                                <button id="btnMarkCompleted" className="black" type="submit">Mark Completed</button>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}