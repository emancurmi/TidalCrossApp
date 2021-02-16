import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import Loader from '../Loader/Loader';
import { read_cookie } from 'sfcookies';

export default class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            //userid: engine.decrypt(read_cookie(config.cookie_key)),
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    renderRedirect = () => {
        console.log(read_cookie(config.cookie_key).length);
        if (read_cookie(config.cookie_key).length === 0) {
            return <Redirect to='/SignIn/' />
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
    }

	componentDidMount() {
		this.setIsLoading(false);
    }

    render() {
        this.renderRedirect()
		if (this.state.isLoading) {
			return (
				<Loader loadingtype={"Profile Information"} />
			);
		}
		else {
			return (
				<div className="column center">




					{/* Content area */}
					<div className="content">

						{/* Inner container */}
						<div className="d-flex align-items-start flex-column flex-md-row">

							{/* Left content */}
							<div className="tab-content w-100 order-2 order-md-1">

								<div className="tab-pane fade active show" id="activity">


									{/* Profile info */}
									<div className="card">
										<div className="card-header header-elements-inline">
											<h5 className="card-title">Profile information</h5>
											<div className="header-elements">
												<div className="list-icons">
													<a className="list-icons-item" data-action="collapse"></a>
													<a className="list-icons-item" data-action="reload"></a>
													<a className="list-icons-item" data-action="remove"></a>
												</div>
											</div>
										</div>

										<div className="card-body">
											<form action="#">
												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Username</label>
															<input type="text" value="Eugene" className="form-control" />
														</div>
														<div className="col-md-6">
															<label>Full name</label>
															<input type="text" value="Kopyov" className="form-control" />
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Address line 1</label>
															<input type="text" value="Ring street 12" className="form-control" />
														</div>
														<div className="col-md-6">
															<label>Address line 2</label>
															<input type="text" value="building D, flat #67" className="form-control" />
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label>City</label>
															<input type="text" value="Munich" className="form-control" />
														</div>
														<div className="col-md-4">
															<label>State/Province</label>
															<input type="text" value="Bayern" className="form-control" />
														</div>
														<div className="col-md-4">
															<label>ZIP code</label>
															<input type="text" value="1031" className="form-control" />
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Email</label>
															<input type="text" readonly="readonly" value="eugene@kopyov.com" className="form-control" />
														</div>
														<div className="col-md-6">
															<label>Your country</label>
															<select className="form-control form-control-select2" data-fouc>
																<option value="germany" selected>Germany</option>
																<option value="france">France</option>
																<option value="spain">Spain</option>
																<option value="netherlands">Netherlands</option>
																<option value="other">...</option>
																<option value="uk">United Kingdom</option>
															</select>
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Phone #</label>
															<input type="text" value="+99-99-9999-9999" className="form-control" />
															<span className="form-text text-muted">+99-99-9999-9999</span>
														</div>

														<div className="col-md-6">
															<label>Upload profile image</label>
															<input type="file" className="form-input-styled" data-fouc />
															<span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
														</div>
													</div>
												</div>

												<div className="text-right">
													<button type="submit" className="btn btn-primary">Save changes</button>
												</div>
											</form>
										</div>
									</div>
									{/* /profile info */}




									{/* Account settings */}
									<div className="card">
										<div className="card-header header-elements-inline">
											<h5 className="card-title">Account settings</h5>
											<div className="header-elements">
												<div className="list-icons">
													<a className="list-icons-item" data-action="collapse"></a>
													<a className="list-icons-item" data-action="reload"></a>
													<a className="list-icons-item" data-action="remove"></a>
												</div>
											</div>
										</div>

										<div className="card-body">
											<form action="#">
												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Username</label>
															<input type="text" value="Kopyov" readonly="readonly" className="form-control" />
														</div>

														<div className="col-md-6">
															<label>Current password</label>
															<input type="password" value="password" readonly="readonly" className="form-control" />
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>New password</label>
															<input type="password" placeholder="Enter new password" className="form-control" />
														</div>

														<div className="col-md-6">
															<label>Repeat password</label>
															<input type="password" placeholder="Repeat new password" className="form-control" />
														</div>
													</div>
												</div>

												<div className="form-group">
													<div className="row">
														<div className="col-md-6">
															<label>Profile visibility</label>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="radio" name="visibility" className="form-input-styled" checked data-fouc />
																		Visible to everyone
																</label>
															</div>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="radio" name="visibility" className="form-input-styled" data-fouc />
																							Visible to friends only
														</label>
															</div>


															<div className="form-check">
																<label className="form-check-label">
																	<input type="radio" name="visibility" className="form-input-styled" data-fouc />
																								Visible to my connections only
														</label>
															</div>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="radio" name="visibility" className="form-input-styled" data-fouc />
																									Visible to my colleagues only
														</label>
															</div>
														</div>

														<div className="col-md-6">
															<label>Notifications</label>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="checkbox" className="form-input-styled" checked data-fouc />
																										Password expiration notification
														</label>
															</div>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="checkbox" className="form-input-styled" checked data-fouc />
																											New message notification
														</label>
															</div>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="checkbox" className="form-input-styled" checked data-fouc />
																												New task notification
														</label>
															</div>

															<div className="form-check">
																<label className="form-check-label">
																	<input type="checkbox" className="form-input-styled" />
																													New contact request notification
														</label>
															</div>
														</div>
													</div>
												</div>

												<div className="text-right">
													<button type="submit" className="btn btn-primary">Save changes</button>
												</div>
											</form>
										</div>
									</div>
									{/* /account settings */}




								</div>

							</div>

							{/* Right sidebar component */}
							<div className="sidebar sidebar-light bg-transparent sidebar-component sidebar-component-right wmin-300 border-0 shadow-0 order-1 order-md-2 sidebar-expand-md">

								{/* Sidebar content */}
								<div className="sidebar-content">

									{/* User card */}
									<div className="card">
										<div className="card-body text-center">
											<div className="card-img-actions d-inline-block mb-3">
												<img className="img-fluid rounded-circle" src="../../../../global_assets/images/placeholders/placeholder.jpg" width="170" height="170" alt="" />
												<div className="card-img-actions-overlay card-img rounded-circle">
													<a href="#" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round">
														<i className="icon-plus3"></i>
													</a>
													<a href="user_pages_profile.html" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round ml-2">
														<i className="icon-link"></i>
													</a>
												</div>
											</div>

											<h6 className="font-weight-semibold mb-0">Hanna Dorman</h6>
											<span className="d-block text-muted">UX/UI designer</span>

											<div className="list-icons list-icons-extended mt-3">
												<a href="#" className="list-icons-item" data-popup="tooltip" title="Google Drive" data-container="body"><i className="icon-google-drive"></i></a>
												<a href="#" className="list-icons-item" data-popup="tooltip" title="Twitter" data-container="body"><i className="icon-twitter"></i></a>
												<a href="#" className="list-icons-item" data-popup="tooltip" title="Github" data-container="body"><i className="icon-github"></i></a>
											</div>
										</div>
									</div>
									{/* /user card */}


									{/* Navigation */}
									<div className="card">
										<div className="card-header bg-transparent header-elements-inline">
											<span className="card-title font-weight-semibold">Navigation</span>
											<div className="header-elements">
												<div className="list-icons">
													<a className="list-icons-item" data-action="collapse"></a>
												</div>
											</div>
										</div>

										<div className="card-body p-0">
											<ul className="nav nav-sidebar my-2">
												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-user"></i>
												 My profile
											</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-cash3"></i>
												Balance
												<span className="text-muted font-size-sm font-weight-normal ml-auto">$1,430</span>
													</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-tree7"></i>
												Connections
												<span className="badge bg-danger badge-pill ml-auto">29</span>
													</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-users"></i>
												Friends
											</a>
												</li>

												<li className="nav-item-divider"></li>

												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-calendar3"></i>
												Events
												<span className="badge bg-teal-400 badge-pill ml-auto">48</span>
													</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">
														<i className="icon-cog3"></i>
												Account settings
											</a>
												</li>
											</ul>
										</div>
									</div>
									{/* /navigation */}


									{/* Share your thoughts */}
									<div className="card">
										<div className="card-header bg-transparent header-elements-inline">
											<span className="card-title font-weight-semibold">Share your thoughts</span>
											<div className="header-elements">
												<div className="list-icons">
													<a className="list-icons-item" data-action="collapse"></a>
												</div>
											</div>
										</div>

										<div className="card-body">
											<form action="#">
												<textarea name="enter-message" className="form-control mb-3" rows="3" cols="1" placeholder="Enter your message..."></textarea>

												<div className="d-flex align-items-center">
													<div className="list-icons list-icons-extended">
														<a href="#" className="list-icons-item" data-popup="tooltip" title="Add photo" data-container="body"><i className="icon-images2"></i></a>
														<a href="#" className="list-icons-item" data-popup="tooltip" title="Add video" data-container="body"><i className="icon-film2"></i></a>
														<a href="#" className="list-icons-item" data-popup="tooltip" title="Add event" data-container="body"><i className="icon-calendar2"></i></a>
													</div>

													<button type="button" className="btn bg-blue btn-labeled btn-labeled-right ml-auto"><b><i className="icon-paperplane"></i></b> Share</button>
												</div>
											</form>
										</div>
									</div>
									{/* /share your thoughts */}

								</div>
							</div>

						</div>
					</div>

				</div>
			)
		}
    }
}