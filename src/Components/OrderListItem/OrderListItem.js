import React, { Component } from 'react';
import config from '../../config';
import './OrderListItem.css';

export default class OrderListItem extends Component {
    //<OrderListItem id={order.orderid} status={order.orderstatus} date={order.orderdate} user={order.ordershopid} />

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            status: this.props.status,
            date: this.props.date,
            user: this.fetchuser(this.props.user)

        }
    }

    setUserData = data => {
        this.setState({
            user: data.username
        })
    }

    fetchuser = (userid) => {
        fetch(config.API_ENDPOINT + 'user/' + userid, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                this.setUserData(data);
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    componentDidMount() {

    }

    render() {

        return (
            <p>
                <a href={"/order?id=" + this.state.id} alt={this.state.id} className={this.state.status}>{this.state.id} - {this.state.user} - {this.state.date}</a>
            </p>
        )
    }
}