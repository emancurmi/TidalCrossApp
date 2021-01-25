import React, { Component } from 'react';


export default class OrderList extends Component {

    orders = [
    { id: 1, userid: 1, order: 'Malta', status: 'Completed', date: "2/1/2020", datecompleted: "5/1/2020" },
    { id: 2, userid: 2, order: 'Aland Islands', stats: 'Pending', date: "2/1/2020", datecompleted: "" },
    { id: 3, userid: 1, order: 'Albania', staus: 'Completed', date: "2/1/2020", datecompleted: "6/1/2020" }
];


    constructor(props) {
        super(props);

        this.state = {
            orders: [{
                id: 0,
                username: 0,
                order: '',
                status: '',
                date: '',
                datecompleted: '',
            }],
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    fetchorders = () => {
        let orderstostate = [];
        this.orders.map(order => {
            let x = { id: order.id, username: this.fetchuser(order.userid), order: order.order, status: order.status, date: order.date, datecompleted: order.datecompleted };
            orderstostate = orderstostate + x;
        })

        this.setState({
            orders: orderstostate
        });

    }

    fetchuser = (userid) => {
        let users = [{ id: 1, username: "Mike" }, { id: 2, username: "John" }, { id: 3, username: "Ryan" }]
        let founduser = { id:0, username: "" };
        users.map(user => {
            if (user.id === userid) {
                founduser.id = user.id;
                founduser.username = user.username;
            }
            console.log(founduser);
            return founduser;
        })

    }

    generateorderlist = () => {
        if (this.state.orders.map !== 0) {
            this.state.orders.map(order => {
                return (
                    <p>
                        <a href={"/order/" + order.id} alt={order.id} className={order.status} key={order.id}> {order.userid + '-' + order.date} </a>
                    </p>
                )
            })
        }
        this.setState({ isLoading: false });
    }


    componentDidMount() {
        this.fetchorders();
    }
    
    order = () => {
    this.state.orders.map(order => {
                                return (
                                    <div className="row center">
                                        <div className="col-2">
                                            <a href={"/order/" + order.id} alt={order.id} className={order.status} key={order.id}> {order.username}  </a>
                                        </div>
                                        <div className="col-2">
                                            {order.date}
                                        </div>
                                    </div>
                                )
                            })}

    render() {
        return (
            
            <div className="white">
                <div className="column center">
                    <div className="row center">
                        <div className="col-1">
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}