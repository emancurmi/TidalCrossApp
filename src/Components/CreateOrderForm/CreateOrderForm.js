import React, { Component } from 'react';
import config from '../../config';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';
import Loader from '../Loader/Loader';
import moment from 'moment';

export default class CreateOrderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: engine.decrypt(read_cookie(config.cookie_key)),
            selectedshop:
            {
                shopid: 0,
                shopname: 'Select Shop'
            },
            shops: [],
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

    setShopData = data => {
        this.setState({
            shops: data
        })
    }

    fetchshops = () => {
        this.setIsLoading(true);

        fetch(config.API_ENDPOINT + 'user/?userrole=member', {
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
                this.setShopData(data)
            })
            .catch(error => {
                this.setState({ error })
            })

        this.setIsLoading(false);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { orderbox } = e.target;
        const order = {
            ordershopid: this.state.selectedshop.shopid,
            orderuserid: parseInt(this.state.userid),
            orderdata: orderbox.value,
            orderstatus: "Pending",
            orderdate: moment().format('YYYY-MM-DD HH:mm:ss'),
            orderdatecompleted: null
        }

        if (order.ordershopid === 0) {
            this.setState({ error: "Select Shop" });
        }
        else {
            console.log(order);
            fetch(config.API_ENDPOINT + 'order/', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${config.API_TOKEN}`
                }
            })

                .then(res => {
                    if (!res.ok) {
                        return res.json().then(error => Promise.reject(error));
                    }
                    return res.json();
                })

                .catch(error => {
                    this.setState({ error })
                })
        }
    }


    handleShopSelect = (e) => {
        const shopSel = e.target.value;
        this.state.shops.map(shop => {
            if (shop.username === shopSel) {
                this.setState({
                    selectedshop: {
                        shopid: shop.userid,
                        shopname: shop.username
                    }
                })
            }
        })
        console.log(this.state.selectedshop);
    }


    componentDidMount() {
        this.fetchshops();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Loading Form"} />
            );
        }
        else {
            return (
                <form onSubmit={this.handleSubmit} >
                    <select
                        name="Countries"
                        onChange={e => this.handleShopSelect(e)}
                        value={this.state.selectedshop.shopname}
                    >
                        <option value="">Select the Shop</option>
                        {this.state.shops.map((shop, key) => (
                            <option key={key} value={shop.username}>
                                {shop.username}
                            </option>
                        ))}
                    </select>
                    <br />
                    <textarea type="text" id="orderbox" name="orderbox" placeholder="Order" title="Enter Order Information" rows="5" cols="60" required /><br />
                    <button id="btnOrderSubmit" className="blue" type="submit">Make Order</button>
                </form>
            )
        }
    }
}