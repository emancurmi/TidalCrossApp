import React, { Component } from 'react';
import config from '../../config';

export default class OrderListItem extends Component {
    //<OrderListItem id={order.orderid} status={order.orderstatus} date={order.orderdate} user={order.ordershopid} />

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            status: this.props.status,
            date: this.props.date,
            user: this.fetchuser(this.props.user),
            orderdata: this.props.orderdata.length >= 100 ? this.props.orderdata.substr(0, 100) + " Read More"  : this.props.orderdata
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

    calculate = () => {
        var dateFirst = this.state.date;
        var dateSecond = Date.now();

        // time difference
        var timeDiff = Math.abs(dateSecond - dateFirst);

        // days difference
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return diffDays;
    }

    componentDidMount() {

    }

    render() {

        return (

            <tr>
                <td className="text-center">
                    <h6 className="mb-0">{this.calculate()}</h6>
                    <div className="font-size-sm text-muted line-height-1">days</div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <div className="mr-3">
                            <a href={"/orderdetails?orderid=" + this.state.id} className="btn bg-teal-400 rounded-round btn-icon btn-sm">
                                <span className="letter-icon"></span>
                            </a>
                        </div>
                        <div>
                            <a href={"/orderdetails?orderid=" + this.state.id} className="text-default font-weight-semibold letter-icon-title">{this.state.user}</a>
                            <div className="text-muted font-size-sm"><span className="badge badge-mark border-blue mr-1"></span>{this.state.status}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <a href={"/orderdetails?orderid=" + this.state.id} className="text-default">
                        <div className="font-weight-semibold">[#{this.state.id}]</div>
                        <span className="text-muted">{this.state.orderdata}</span>
                    </a>
                </td>
                <td className="text-center">
                    <div className="list-icons">
                        
                    </div>
                </td>
            </tr>



            //<p>
            //    <a href={"/order/"+ this.state.id} className={this.state.status}>{this.state.id} - {this.state.user} - {this.state.date}</a>
            //</p>
        )
    }
}