import React, { Component } from 'react';
import config from '../../config';
import Loader from '../Loader/Loader';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';
import OrdersList from '../OrdersList/OrdersList';

export default class Member extends Component {

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

    //generateorderinfo = () => {
    //    if (this.state.order !== undefined) {
    //        return (
    //            <div className="col-2">
    //                <h3>Order</h3>
    //                <Order order={this.state.order} user={this.state.user} />
    //            </div>
    //        )
    //    }
    //}

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
                                <h1>Welcome member</h1>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-2">
                                <h3>Current Orders</h3>
                                <OrdersList shopid={this.state.userid}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
}

