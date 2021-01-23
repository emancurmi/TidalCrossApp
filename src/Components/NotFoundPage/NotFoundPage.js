import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="white">
                <div className="row content">
                    <div className="column col-1 center" >
                        <h1>OOPS!</h1>
                        <h4>Error 404 : Page Not Found</h4>
                        <p>
                            <Link to="/">Go to Home </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}