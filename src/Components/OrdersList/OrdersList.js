import React, { Component } from 'react';
import config from '../../config';
import OrderListItem from '../OrderListItem/OrderListItem';

export default class OrdersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userid: this.props.userid,
            shopid: this.props.shopid,
            orders: [],
            error: null,
            isLoading: true,
            showModal: false,
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

    tick() {
        if (this.state.userid != null) { this.fetchordersbyuser(this.state.userid) }
        if (this.state.shopid != null) { this.fetchordersbyshop(this.state.shopid) }
    }

    generateorderlist = () => {
        if (this.state.orders !== undefined)
        {
            this.state.orders.map(order => {
                if (this.props.userid != null) {
                    return (
                        <OrderListItem key={order.orderid} id={order.orderid} status={order.orderstatus} date={order.orderdate.split('T')[0]} orderdata={order.orderdata} user={order.ordershopid} />
                    )
                }
                else if (this.props.shopid != null) {
                    return (
                        <OrderListItem key={order.orderid} id={order.orderid} status={order.orderstatus} date={order.orderdate.split('T')[0]} user={order.orderuserid} />
                    )
                }
            })
        }
    }

    componentDidMount() {
        if (this.state.userid != null) { this.fetchordersbyuser(this.state.userid) }
        if (this.state.shopid != null) { this.fetchordersbyshop(this.state.shopid) }

        this.timerID = setInterval(
            () => this.tick(),
            10000
        );

    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header header-elements-sm-inline">
                    <h6 className="card-title">Support tickets</h6>
                    <div className="header-elements"></div>
                </div>

                <div className="table-responsive">
                    <table className="table text-nowrap">
                        <thead>
                            <tr>
                                <th>Due</th>
                                <th>User</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active table-border-double">
                                <td colSpan="3">Active tickets</td>
                                <td className="text-right">
                                    <span className="badge bg-blue badge-pill">{this.state.orders !== undefined ? this.state.orders.length : 0}</span>
                                </td>
                            </tr>

                            {this.generateorderlist()}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

//to be continued
//<tr className="table-active table-border-double">
//	<td colSpan="3">Resolved tickets</td>
//	<td className="text-right">
//		<span className="badge bg-success badge-pill">42</span>
//	</td>
//</tr>

//	<tr>
//		<td className="text-center">
//			<i className="icon-checkmark3 text-success"></i>
//		</td>
//		<td>
//			<div className="d-flex align-items-center">
//				<div className="mr-3">
//					<a href="#" className="btn bg-success-400 rounded-round btn-icon btn-sm">
//						<span className="letter-icon"></span>
//					</a>
//				</div>
//				<div>
//					<a href="#" className="text-default font-weight-semibold letter-icon-title">Alan Macedo</a>
//					<div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1"></span> Resolved</div>
//				</div>
//			</div>
//		</td>
//		<td>
//			<a href="#" className="text-default">
//				<div>[#1046] Avoid some unnecessary HTML string</div>
//				<span className="text-muted">Rather than building a string of HTML and then parsing it...</span>
//			</a>
//		</td>
//		<td className="text-center">
//			<div className="list-icons">
//				<div className="dropdown">
//					<a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7"></i></a>
//					<div className="dropdown-menu dropdown-menu-right">
//						<a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>
//						<a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>
//						<div className="dropdown-divider"></div>
//						<a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve issue</a>
//						<a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close issue</a>
//					</div>
//				</div>
//			</div>
//		</td>
//	</tr>

//	<tr>
//		<td className="text-center">
//			<i className="icon-checkmark3 text-success"></i>
//		</td>
//		<td>
//			<div className="d-flex align-items-center">
//				<div className="mr-3">
//					<a href="#" className="btn bg-pink-400 rounded-round btn-icon btn-sm">
//						<span className="letter-icon"></span>
//					</a>
//				</div>
//				<div>
//					<a href="#" className="text-default font-weight-semibold letter-icon-title">Brett Castellano</a>
//					<div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1"></span> Resolved</div>
//				</div>
//			</div>
//		</td>
//		<td>
//			<a href="#" className="text-default">
//				<div>[#1038] Update json configuration</div>
//				<span className="text-muted">The <code>files</code> property is necessary to override the files property...</span>
//			</a>
//		</td>
//		<td className="text-center">
//			<div className="list-icons">
//				<div className="dropdown">
//					<a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7"></i></a>
//					<div className="dropdown-menu dropdown-menu-right">
//						<a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>
//						<a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>
//						<div className="dropdown-divider"></div>
//						<a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve issue</a>
//						<a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close issue</a>
//					</div>
//				</div>
//			</div>
//		</td>
//	</tr>

//	<tr>
//		<td className="text-center">
//			<i className="icon-checkmark3 text-success"></i>
//		</td>
//		<td>
//			<div className="d-flex align-items-center">
//				<div className="mr-3">
//					<a href="#">
//						<img src="../../../../global_assets/images/placeholders/placeholder.jpg" className="rounded-circle" width="32" height="32" alt="" />
//					</a>
//				</div>
//				<div>
//					<a href="#" className="text-default font-weight-semibold">Roxanne Forbes</a>
//					<div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1"></span> Resolved</div>
//				</div>
//			</div>
//		</td>
//		<td>
//			<a href="#" className="text-default">
//				<div>[#1034] Tooltip multiple event</div>
//				<span className="text-muted">Fix behavior when using tooltips and popovers that are...</span>
//			</a>
//		</td>
//		<td className="text-center">
//			<div className="list-icons">
//				<div className="dropdown">
//					<a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7"></i></a>
//					<div className="dropdown-menu dropdown-menu-right">
//						<a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>
//						<a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>
//						<div className="dropdown-divider"></div>
//						<a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve issue</a>
//						<a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close issue</a>
//					</div>
//				</div>
//			</div>
//		</td>
//	</tr>

//	<tr className="table-active table-border-double">
//		<td colSpan="3">Closed tickets</td>
//		<td className="text-right">
//			<span className="badge bg-danger badge-pill">37</span>
//		</td>
//	</tr>

//	<tr>
//		<td className="text-center">
//			<i className="icon-cross2 text-danger-400"></i>
//		</td>
//		<td>
//			<div className="d-flex align-items-center">
//				<div className="mr-3">
//					<a href="#">
//						<img src="../../../../global_assets/images/placeholders/placeholder.jpg" className="rounded-circle" width="32" height="32" alt="" />
//					</a>
//				</div>
//				<div>
//					<a href="#" className="text-default font-weight-semibold">Mitchell Sitkin</a>
//					<div className="text-muted font-size-sm"><span className="badge badge-mark border-danger mr-1"></span> Closed</div>
//				</div>
//			</div>
//		</td>
//		<td>
//			<a href="#" className="text-default">
//				<div>[#1040] Account for static form controls in form group</div>
//				<span className="text-muted">Resizes control label's font-size and account for the standard...</span>
//			</a>
//		</td>
//		<td className="text-center">
//			<div className="list-icons">
//				<div className="dropdown">
//					<a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7"></i></a>
//					<div className="dropdown-menu dropdown-menu-right">
//						<a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>
//						<a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>
//						<div className="dropdown-divider"></div>
//						<a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve issue</a>
//						<a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey"></i> Reopen issue</a>
//					</div>
//				</div>
//			</div>
//		</td>
//	</tr>

//	<tr>
//		<td className="text-center">
//			<i className="icon-cross2 text-danger"></i>
//		</td>
//		<td>
//			<div className="d-flex align-items-center">
//				<div className="mr-3">
//					<a href="#" className="btn bg-brown-400 rounded-round btn-icon btn-sm">
//						<span className="letter-icon"></span>
//					</a>
//				</div>
//				<div>
//					<a href="#" className="text-default font-weight-semibold letter-icon-title">Katleen Jensen</a>
//					<div className="text-muted font-size-sm"><span className="badge badge-mark border-danger mr-1"></span> Closed</div>
//				</div>
//			</div>
//		</td>
//		<td>
//			<a href="#" className="text-default">
//				<div>[#1038] Proper sizing of form control feedback</div>
//				<span className="text-muted">Feedback icon sizing inside a larger/smaller form-group...</span>
//			</a>
//		</td>
//		<td className="text-center">
//			<div className="list-icons">
//				<div className="dropdown">
//					<a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7"></i></a>
//					<div className="dropdown-menu dropdown-menu-right">
//						<a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>
//						<a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>
//						<div className="dropdown-divider"></div>
//						<a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve issue</a>
//						<a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey"></i> Reopen issue</a>
//					</div>
//				</div>
//			</div>
//		</td>
//	</tr>