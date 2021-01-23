import React from 'react';
import { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingtype: props.loadingtype,
        }
    }

    render() {
        return (
            <div className="loader">Loading...</div>
        );
    }
}


