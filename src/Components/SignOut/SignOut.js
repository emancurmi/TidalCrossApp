import React, { Component } from 'react';
import { delete_cookie } from 'sfcookies';
import { Redirect } from 'react-router-dom';
import config from '../../config';

export default class SignOut extends Component {

    componentDidMount() {
        this.props.handleLogOut();
    }

    render() {
        return (
            <div className="column center">
                <div className="linear-dark">
                    <div className="row center">
                        <div className="col-1">
                            {delete_cookie(config.cookie_key)}
                            {
                                this.props.handleLogOut
                            }
                            <Redirect to='/' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}  