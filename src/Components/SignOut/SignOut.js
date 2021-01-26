import React, { Component } from 'react';
import { delete_cookie } from 'sfcookies';
import { Redirect } from 'react-router-dom';
import config from '../../config';

export default class SignOut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatesstate : ''
        }
    }
    

    componentDidMount() {
        this.setState({
            updatestate: 'update'
        });
    }

    render() {
        return (
            <div className="column center">
                <div className="linear-dark">
                    <div className="row center">
                        <div className="col-1">
                {
                    delete_cookie(config.cookie_key)
                }
                <Redirect to='/' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}  