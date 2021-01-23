import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import OrderList from '../OrdersList/OrdersList';

export default class Member extends Component {

    constructor(props) {

        super(props);

        this.state = {
            //userid: engine.decrypt(read_cookie(config.cookie_key)),
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

