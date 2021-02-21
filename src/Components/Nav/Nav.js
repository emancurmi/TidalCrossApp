import React, { Component } from 'react';
import config from '../../config';
import { read_cookie } from 'sfcookies';
import { Link } from 'react-router-dom';
import engine from '../../engine';

export default class Nav extends Component {

    constructor(props) {
        super(props);
		this.state = {
			userid: (read_cookie(config.cookie_key).length !== 0) ? engine.decrypt(read_cookie(config.cookie_key)) : 0,
			user: {},
            isLoading: true,
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
	}

	setUserData = data => {
		this.setState({
			user: data
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
        this.setIsLoading(false);
	}

	loadspan = () => {
		if (read_cookie(config.cookie_key).length !== 0) {
			return (
				<Link to="/dashboard" className="badge bg-success-400 ml-md-auto mr-md-3">Dashboard</Link>
			)
		}
		else {
			return (
				<Link to="/SignIn" className="badge bg-success-400 ml-md-auto mr-md-3">Log In</Link>
			)
		}
    }

	loadprofile = () => {
		if (read_cookie(config.cookie_key).length !== 0) {
			if (this.state.user.username === undefined) {
				this.fetchuser(engine.decrypt(read_cookie(config.cookie_key)));
			}
			else {
				return (
					<ul className="navbar-nav">
						<li className="nav-item dropdown dropdown-user">

							<a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
								<img src="./global_assets/images/placeholders/placeholder.jpg" className="rounded-circle mr-2" height="34" alt="" />
								<span>{this.state.user.username}</span>
							</a>

							<div className="dropdown-menu dropdown-menu-right">
								<Link to="/dashboard" className="dropdown-item"><i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard</Link>
								<Link to="/profile" className="dropdown-item"><i className="fa fa-user" aria-hidden="true"></i>Profile</Link>
								<Link to="/signOut" className="dropdown-item"><i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link>
							</div>
						</li>
					</ul>
				)
			}
		}
    }

	render() {
		return (

			<div className="navbar navbar-expand-md navbar-dark">
				<div className="navbar-brand wmin-200">
					<a href="/" className="d-inline-block">
						<img src="./global_assets/images/logo_light.png" alt="" />
					</a>
				</div>

				<div className="d-md-none">
					{/*
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
						<i className="icon-tree5"></i>
					</button>
					*/}
					<button className="navbar-toggler sidebar-mobile-main-toggle" type="button" data-toggle="collapse" data-target="#navbar-mobile">
						<i className="icon-paragraph-justify3"></i>
					</button>
				</div>

				<div className="collapse navbar-collapse" id="navbar-mobile">

					{/*
						<ul className="navbar-nav">
					
						<li className="nav-item">
							<a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
								<i className="icon-paragraph-justify3"></i>
							</a>
						</li>
						
						<li className="nav-item dropdown">
							<a href="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
								<i className="icon-bell2"></i>
								<span className="d-md-none ml-2">Activity</span>
								<span className="badge badge-pill badge-mark bg-orange-400 border-orange-400 ml-auto ml-md-0"></span>
							</a>

							<div className="dropdown-menu dropdown-content wmin-md-350">
								<div className="dropdown-content-header">
									<span className="font-weight-semibold">Latest activity</span>
									<a href="#" className="text-default"><i className="icon-search4 font-size-base"></i></a>
								</div>

								<div className="dropdown-content-body dropdown-scrollable">
									<ul className="media-list">
										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-success-400 rounded-round btn-icon"><i className="icon-mention"></i></a>
											</div>

											<div className="media-body">
												<a href="#">Taylor Swift</a> mentioned you in a post "Angular JS. Tips and tricks"
										<div className="font-size-sm text-muted mt-1">4 minutes ago</div>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-pink-400 rounded-round btn-icon"><i className="icon-paperplane"></i></a>
											</div>

											<div className="media-body">
												Special offers have been sent to subscribed users by <a href="#">Donna Gordon</a>
												<div className="font-size-sm text-muted mt-1">36 minutes ago</div>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-blue rounded-round btn-icon"><i className="icon-plus3"></i></a>
											</div>

											<div className="media-body">
												<a href="#">Chris Arney</a> created a new <span className="font-weight-semibold">Design</span> branch in <span className="font-weight-semibold">Limitless</span> repository
										<div className="font-size-sm text-muted mt-1">2 hours ago</div>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-purple-300 rounded-round btn-icon"><i className="icon-truck"></i></a>
											</div>

											<div className="media-body">
												Shipping cost to the Netherlands has been reduced, database updated
										<div className="font-size-sm text-muted mt-1">Feb 8, 11:30</div>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-warning-400 rounded-round btn-icon"><i className="icon-comment"></i></a>
											</div>

											<div className="media-body">
												New review received on <a href="#">Server side integration</a> services
										<div className="font-size-sm text-muted mt-1">Feb 2, 10:20</div>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<a href="#" className="btn bg-teal-400 rounded-round btn-icon"><i className="icon-spinner11"></i></a>
											</div>

											<div className="media-body">
												<strong>January, 2018</strong> - 1320 new users, 3284 orders, $49,390 revenue
										<div className="font-size-sm text-muted mt-1">Feb 1, 05:46</div>
											</div>
										</li>
									</ul>
								</div>

								<div className="dropdown-content-footer bg-light">
									<a href="#" className="text-grey mr-auto">All activity</a>
									<div>
										<a href="#" className="text-grey" data-popup="tooltip" title="Clear list"><i className="icon-checkmark3"></i></a>
										<a href="#" className="text-grey ml-2" data-popup="tooltip" title="Settings"><i className="icon-gear"></i></a>
									</div>
								</div>
							</div>
						</li>
						
					</ul>
					*/}
					
					

					{/*
					<span className="badge bg-success-400 ml-md-auto mr-md-3">Active</span>
					*/}

					{/*
					<ul className="navbar-nav">
						
						 <li className="nav-item dropdown">
							<a href="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
								<i className="icon-bubbles5"></i>
								<span className="d-md-none ml-2">Messages</span>
								<span className="badge badge-pill badge-mark bg-orange-400 border-orange-400 ml-auto ml-md-0"></span>
							</a>

							<div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
								<div className="dropdown-content-header">
									<span className="font-weight-semibold">Messages</span>
									<a href="#" className="text-default"><i className="icon-compose"></i></a>
								</div>

								<div className="dropdown-content-body dropdown-scrollable">
									<ul className="media-list">
										<li className="media">
											<div className="mr-3 position-relative">
												<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt="" />
											</div>

											<div className="media-body">
												<div className="media-title">
													<a href="#">
														<span className="font-weight-semibold">James Alexander</span>
														<span className="text-muted float-right font-size-sm">04:58</span>
													</a>
												</div>

												<span className="text-muted">who knows, maybe that would be the best thing for me...</span>
											</div>
										</li>

										<li className="media">
											<div className="mr-3 position-relative">
												<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt="" />
											</div>

											<div className="media-body">
												<div className="media-title">
													<a href="#">
														<span className="font-weight-semibold">Margo Baker</span>
														<span className="text-muted float-right font-size-sm">12:16</span>
													</a>
												</div>

												<span className="text-muted">That was something he was unable to do because...</span>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt="" />
											</div>
											<div className="media-body">
												<div className="media-title">
													<a href="#">
														<span className="font-weight-semibold">Jeremy Victorino</span>
														<span className="text-muted float-right font-size-sm">22:48</span>
													</a>
												</div>

												<span className="text-muted">But that would be extremely strained and suspicious...</span>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt="" />
											</div>
											<div className="media-body">
												<div className="media-title">
													<a href="#">
														<span className="font-weight-semibold">Beatrix Diaz</span>
														<span className="text-muted float-right font-size-sm">Tue</span>
													</a>
												</div>

												<span className="text-muted">What a strenuous career it is that I've chosen...</span>
											</div>
										</li>

										<li className="media">
											<div className="mr-3">
												<img src="../../../../global_assets/images/placeholders/placeholder.jpg" width="36" height="36" className="rounded-circle" alt="" />
											</div>
											<div className="media-body">
												<div className="media-title">
													<a href="#">
														<span className="font-weight-semibold">Richard Vango</span>
														<span className="text-muted float-right font-size-sm">Mon</span>
													</a>
												</div>

												<span className="text-muted">Other travelling salesmen live a life of luxury...</span>
											</div>
										</li>
									</ul>
								</div>

								<div className="dropdown-content-footer justify-content-center p-0">
									<a href="#" className="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i className="icon-menu7 d-block top-0"></i></a>
								</div>
							</div>
						</li>
					</ul>
					*/}

					{
						this.loadspan()
                    }
					{
						this.loadprofile()
					}
				</div>
			</div>
		)
	}
}