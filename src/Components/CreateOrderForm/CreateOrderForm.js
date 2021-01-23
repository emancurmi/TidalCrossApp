import React, { Component } from 'react';

export default class CreateOrderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedshop: 'Select Shop',
            shops: [{
                id: '',
                name: ''
            }],
            error: null,
            isLoading: false,
            showModal: false
        }
    }

    fetchshops = () => {
        this.setState({
            shops: [
                { id: '1', name: 'Afghanistan' },
                { id: '2', name: 'Aland Islands' },
                { id: '3', name: 'Albania' }
            ]
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { orderbox } = e.target;
        const order = {
            shop: this.state.shop,
            orderinfo: orderbox.value
        }
        if (order.shop === 'Select Shop') {
            this.setState({ error: "Select Shop" });
        }
        else {

            this.setState({ error: null });

            console.log(order);
        }
    }


    handleShopSelect = (e) => {
        console.log("Selected shop", e.target.value);
        const shopSel = e.target.value;
        this.setState({ selectedshop: shopSel });
    }


    componentDidMount() {
        this.fetchshops();
        console.log(this.state.shops)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <select
                    name="Countries"
                    onChange={e => this.handleShopSelect(e)}
                    value={this.state.selectedshop}
                >
                    <option value="">Select the country</option>
                    {this.state.shops.map((shop, key) => (
                        <option key={key} value={shop.name}>
                            {shop.name}
                        </option>
                    ))}
                </select>
                <br />
                <textarea type="text" id="orderbox" name="orderbox" placeholder="Order" title="Enter Order Information" rows="5" cols="60" required /><br />
                <button id="btnRegisterSubmit" className="blue" type="submit">Register</button>
            </form>
        )
    }
}