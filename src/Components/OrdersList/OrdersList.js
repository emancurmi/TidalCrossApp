import React, { Component } from 'react';
import config from '../../config';
import OrderListItem from '../OrderListItem/OrderListItem';

export default class OrdersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],
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

    setOrderData = data => {
        this.setState({
            orders: data
        })
    }

    fetchordersbyuser = (userid) => {
        this.setIsLoading(true);

        fetch(config.API_ENDPOINT + 'order?userid=' + userid, {
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
                this.setOrderData(data)
            })
            .catch(error => {
                this.setState({ error })
            })

        this.setIsLoading(false);
    }

    fetchordersbyshop = (shopid) => {
        this.setIsLoading(true);

        fetch(config.API_ENDPOINT + 'order?shopid=' + shopid, {
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
                this.setOrderData(data)
            })
            .catch(error => {
                this.setState({ error })
            })

        this.setIsLoading(false);
    }



    componentDidMount() {
        let userid = this.props.userid;
        let shopid = this.props.shopid;
        console.log(userid)
        console.log(shopid)
        if (userid != null) { this.fetchordersbyuser(userid) }

        if (shopid != null) { this.fetchordersbyshop(shopid) }
        this.setState({ isLoading: false })
    }

    render() {
        return (
            <div className="white">
                <div className="column center">
                    <div className="row center">
                        <div className="col-1">
                            {this.state.orders.map(order => {
                                if (this.props.userid != null) {
                                    return (
                                        <OrderListItem key={order.orderid} id={order.orderid} status={order.orderstatus} date={order.orderdate.split('T')[0]} user={order.ordershopid} />
                                    )
                                }
                                else if (this.props.shopid != null) {
                                    return (
                                        <OrderListItem key={order.orderid} id={order.orderid} status={order.orderstatus} date={order.orderdate.split('T')[0]} user={order.orderuserid} />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}