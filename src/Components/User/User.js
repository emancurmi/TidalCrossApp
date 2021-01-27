import React, { Component } from 'react';
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';
import CreateOrderForm from '../CreateOrderForm/CreateOrderForm';
import engine from '../../engine';
import OrdersList from '../OrdersList/OrdersList';

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
                <div className="light">
                    <div className="column content">
                        <div className="row center">
                            <div className="col-1">
                                <h1>Welcome User</h1>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-2">
                                <h3>Current Orders</h3>
                                <OrdersList userid={this.state.userid} />
                            </div>
                            <div className="col-2">
                                <h3>Create New Order</h3>
                                <CreateOrderForm />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}