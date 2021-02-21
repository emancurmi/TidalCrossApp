import React, { Component } from 'react';
import './Home.css';
export default class Home extends Component {

    nextPath(path) {
        this.props.history.push(path)
    }

	render() {
		return (
			<div className="page-content pt-0">
				<div className="content-wrapper">
					<div className="content">
						{/*Cover Picture*/}
						<div className="profile-cover">
							<div className="profile-cover-img"></div>
							<div className="media align-items-center text-center text-md-left flex-column flex-md-row m-0">
								<div className="mr-md-3 mb-2 mb-md-0">
									<a href="/profile" className="profile-thumb">
										<img src="../../../../global_assets/images/placeholders/placeholder.jpg" className="border-white rounded-circle" width="48" height="48" alt="" />
									</a>
								</div>

								<div className="media-body text-white">
									<h1 className="mb-0">Tidal Cross</h1>
									<span className="d-block">Your Online Ordering System</span>
								</div>

								<div className="ml-md-3 mt-2 mt-md-0">
									<ul className="list-inline list-inline-condensed mb-0">
										<li className="list-inline-item"><a href="/signup" className="btn btn-light border-transparent">Get Started</a></li>
										<li className="list-inline-item"><a href="/contact" className="btn btn-light border-transparent">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>

						{/*Customers*/}
						{/*<div className="row">
							<div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
								<img src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="Image" className="img-fluid" />
							</div>
							<div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
								<img src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="Image" className="img-fluid" />
							</div>
							<div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
								<img src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="Image" className="img-fluid" />
							</div>
							<div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
								<img src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="Image" className="img-fluid" />
							</div>
						</div>
						*/}
						{/*Why Business Owner's Loves Tidal Cross*/}
						<div className="card">
							<div className="card-header header-elements-inline">
								<h1 className="card-title">Why Business Owner's Loves Tidal Cross</h1>
							</div>
							<div className="card-body">


								<div className="row">
									<div className="col-lg-4">
										<div className="card">
											<div className="card-body text-center">
												<h6 className="font-weight-semibold">Fully Functional</h6>
												<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

												<h6 className="font-weight-semibold">Live Chat</h6>
												<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

												<h6 className="font-weight-semibold">Secure Data</h6>
												<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

											</div>
										</div>
									</div>

									<div className="col-lg-4">
										<div className="card">
											<div className="card-body text-center">
												<img className="card-img-top img-fluid" src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="" />
											</div>
										</div>
									</div>

									<div className="col-lg-4">
										<div className="card">
											<div className="card-body text-center">
												<h6 className="font-weight-semibold">Easy to Find Data</h6>
												<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

												<h6 className="font-weight-semibold">Responsive Design</h6>
												<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

												<h6 className="font-weight-semibold">Full Support</h6>
												<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

											</div>
										</div>
									</div>
								</div>




							</div>
						</div>

						{/*How tidal cross works*/}
						<div className="card">
							<div className="card-header header-elements-inline">
								<h1 className="card-title">How Tidal Cross Works?</h1>
							</div>
							<div className="card-body">
								<h6 className="font-weight-semibold">Fully Functional</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Live Chat</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Secure Data</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

								<h6 className="font-weight-semibold">Easy to Find Data</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Responsive Design</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Full Support</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

							</div>
						</div>

						{/*Smart and secure*/}
						<div className="card">
							<div className="card-header header-elements-inline">
								<h1 className="card-title">Smart and Secure</h1>
							</div>
							<div className="card-body">
								<h6 className="font-weight-semibold">Fully Functional</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Live Chat</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Secure Data</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

								<h6 className="font-weight-semibold">Easy to Find Data</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Responsive Design</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Full Support</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

							</div>
						</div>

						{/*More productivity with less effort*/}
						<div className="card">
							<div className="card-header header-elements-inline">
								<h1 className="card-title">More productivity with less effort</h1>
							</div>
							<div className="card-body">
								<h6 className="font-weight-semibold">Fully Functional</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Live Chat</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Secure Data</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

								<h6 className="font-weight-semibold">Easy to Find Data</h6>
								<p className="mb-3">Common problem of templates is that all code is deeply integrated into the core. This limits your freedom in decreasing amount of code, i.e. it becomes pretty difficult to remove unnecessary code from the project. Limitless allows you to remove unnecessary and extra code easily just by removing the path to specific LESS file with component styling. All plugins and their options are also in separate files. Use only components you actually need!</p>

								<h6 className="font-weight-semibold">Responsive Design</h6>
								<p className="mb-3">Starter kit is a set of pages, useful for developers to start development process from scratch. Each layout includes base components only: layout, page kits, color system which is still optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and markup. CSS files are compiled without any plugins or components. Starter kit was moved to a separate folder for better accessibility.</p>

								<h6 className="font-weight-semibold">Full Support</h6>
								<p>You open one of the starter pages, add necessary plugins, uncomment paths to files in components.less file, compile new CSS. That's it. I'd also recommend to open one of main pages with functionality you need and copy all paths/JS code from there to your new page, it's just faster and easier.</p>

							</div>
						</div>

						{/*What our customers are saying*/}
						<div className="card">
							<div className="card-header header-elements-inline">
								<h1 className="card-title">What Our Customers are Saying</h1>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-img-actions">
												<img className="card-img-top img-fluid" src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="" />
												{/*<div className="card-img-actions-overlay card-img-top">
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 rounded-round">
														<i className="icon-download4"></i>
													</a>
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 ml-2 rounded-round">
														<i className="icon-link2"></i>
													</a>
												</div>*/}
											</div>

											<div className="card-body">
												<h5 className="card-title">For ostrich much</h5>
												<p className="card-text">Some various less crept gecko the jeepers dear forewent far the ouch far a incompetent saucy wherever towards</p>
											</div>

											<div className="card-footer bg-transparent d-flex justify-content-between">
												<span className="text-muted">April 12, 2018</span>
												<span>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-half font-size-base text-warning-300"></i>
													<span className="text-muted ml-2">(12)</span>
												</span>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-img-actions">
												<img className="card-img-top img-fluid" src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="" />
												{/*<div className="card-img-actions-overlay card-img-top">
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 rounded-round">
														<i className="icon-download4"></i>
													</a>
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 ml-2 rounded-round">
														<i className="icon-link2"></i>
													</a>
												</div>*/}
											</div>

											<div className="card-body">
												<h5 className="card-title">Helpfully stolidly</h5>
												<p className="card-text">Hippopotamus aside while a shrewdly this after kookaburra wow in haphazardly much salmon buoyantly sullen gosh</p>
											</div>

											<div className="card-footer bg-transparent d-flex justify-content-between">
												<span className="text-muted">April 11, 2018</span>
												<span>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<span className="text-muted ml-2">(35)</span>
												</span>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-img-actions">
												<img className="card-img-top img-fluid" src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="" />
												{/*<div className="card-img-actions-overlay card-img-top">
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 rounded-round">
														<i className="icon-download4"></i>
													</a>
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 ml-2 rounded-round">
														<i className="icon-link2"></i>
													</a>
												</div>*/}
											</div>

											<div className="card-body">
												<h5 className="card-title">Considering far</h5>
												<p className="card-text">Kookaburra so hey a less tritely far congratulated this winked some under had unblushing beyond sympathetic</p>
											</div>

											<div className="card-footer bg-transparent d-flex justify-content-between">
												<span className="text-muted">April 10, 2018</span>
												<span>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-empty3 font-size-base text-warning-300"></i>
													<span className="text-muted ml-2">(42)</span>
												</span>
											</div>
										</div>
									</div>

									<div className="col-lg-3 col-md-6">
										<div className="card">
											<div className="card-img-actions">
												<img className="card-img-top img-fluid" src="../../../../global_assets/images/placeholders/placeholder.jpg" alt="" />
												{/*<div className="card-img-actions-overlay card-img-top">
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 rounded-round">
														<i className="icon-download4"></i>
													</a>
													<a href="#" className="btn btn-outline btn-icon bg-white text-white border-white border-2 ml-2 rounded-round">
														<i className="icon-link2"></i>
													</a>
												</div>*/}
											</div>

											<div className="card-body">
												<h5 className="card-title">Despite perversely</h5>
												<p className="card-text">Coming merits and was talent enough far. Sir joy northward sportsmen education. Put still any about manor heard</p>
											</div>

											<div className="card-footer bg-transparent d-flex justify-content-between">
												<span className="text-muted">April 09, 2018</span>
												<span>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<i className="icon-star-full2 font-size-base text-warning-300"></i>
													<span className="text-muted ml-2">(59)</span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		)
	}
}