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
                <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-xl-12">
                                <OrdersList shopid={this.state.userid} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

