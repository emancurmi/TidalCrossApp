import React, { Component } from 'react';
import config from '../../config';
import engine from '../../engine';
import { read_cookie } from 'sfcookies';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';


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

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
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

                .then(data => {
                    orderbox.value = "";
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

                <div class="card">
                    <div class="card-header header-elements-inline">
                        <h5 class="card-title">Create new order</h5>
                    </div>

                    <div class="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <select className="form-control" name="Countries" onChange={e => this.handleShopSelect(e)} value={this.state.selectedshop.shopname}>
                                    <option value="">Select the Shop</option>
                                    {this.state.shops.map((shop, key) => (
                                        <option key={key} value={shop.username}>
                                            {shop.username}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Your Order:</label>
                                <textarea id="orderbox" name="orderbox" rows="5" cols="5" className="form-control" placeholder="Enter your order here" required></textarea>
                            </div>

                            <div class="text-right">
                                <button id="btnOrderSubmit" type="submit" className="btn btn-primary">Submit Order <i class="icon-paperplane ml-2"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}