import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';

export default class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
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

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
    }

    componentDidMount() {
        this.setIsLoading(false);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Contact Information"} />
            );
        }
        else {
            return (
                <div className="column center">
                    Contact us
                </div>
            )
        }
    }
}