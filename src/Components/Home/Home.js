
import React, { Component } from 'react';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/helpers.css';
import './assets/css/style.css';
import './assets/css/landing-2.css';


export default class Home extends Component {

    nextPath(path) {
        this.props.history.push(path)
	}

	oldpage = () => {
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

	render() {
		return (
			<div>
				<section className="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6">
								<h2 className="heading mb-3">Tidal Cross</h2>
								<div className="sub-heading">
									<p className="mb-4">The best tool for Professionals to gain valuable time.</p>
								</div>
							</div>
							<div className="col-md-1">
							</div>
							<div className="col-md-5 relative align-self-center">

								<div>
									<a className="btn btn-success btn-lg btn-block pb_btn-pill  btn-shadow-blue" href="/signin"><span className="pb_font-14 text-uppercase pb_letter-spacing-1">Get Started</span></a>
									<a className="btn btn-success btn-lg btn-block pb_btn-pill  btn-shadow-blue" href="/contact"><span className="pb_font-14 text-uppercase pb_letter-spacing-1">Contact Us</span></a>
								</div>


							</div>
						</div>
					</div>
				</section>


				<section className="pb_section bg-light pb_pb-250" id="section-features">
					<div className="container">
						<div className="row justify-content-center mb-5">
							<div className="col-md-6 text-center mb-5">
								<h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Simple for Professionals</strong></h5>
								<h2>App Features</h2>
							</div>
						</div>
						<div className="row align-items-center justify-content-center">
							<div className="col-lg-4 col-md- col-sm-6">
								<div className="media d-block pb_feature-v1 text-center">
									<div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
									<div className="media-body">
										<h3 className="mt-0 mb-3 heading"><strong><u>Step 1</u></strong></h3>
										<p className="text-sans-serif">Choose your supplier from our always updating list.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md- col-sm-6">
								<div className="media d-block pb_feature-v1 text-center">
									<div className="pb_icon"><i className="ion-ios-speedometer-outline pb_icon-gradient"></i></div>
									<div className="media-body">
										<h3 className="mt-0 mb-3 heading"><strong><u>Step 2</u></strong></h3>
										<p className="text-sans-serif">Write your shopping list as if you're writing a message</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md- col-sm-6">
								<div className="media d-block pb_feature-v1 text-center">
									<div className="pb_icon"><i className="ion-ios-infinite-outline pb_icon-gradient"></i></div>
									<div className="media-body">
										<h3 className="mt-0 mb-3 heading"><strong><u>Step 3</u></strong></h3>
										<p className="text-sans-serif">Submit your order and wait for notification when read.</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>


				<section className="pb_xl_py_cover overflow-hidden pb_slant-light pb_gradient_v1 cover-bg-opacity-8">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-5 justify-content-center">
								<h2 className="heading mb-5 pb_font-40">Join as a supplier who uses Instant App</h2>
								<div className="sub-heading">
									<p className="mb-4">The System is designed to make your shop stand out for your efficiency and fast service you provide to your esteemed customers.</p>
								</div>
							</div>
							<div className="col-md-1"></div>
							<div className="col-md-5">
									<img src="./global_assets/images/shop_dash.png" width="700" alt="Shop Dashboard" />
							</div>
						</div>
					</div>
				</section>

				<section className="pb_section" id="section-faq">
					<div className="container">
						<div className="row justify-content-center mb-5">
							<div className="col-md-6 text-center mb-5">
								<h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>FAQ</strong></h5>
								<h2>Frequently Ask Questions</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md">
								<div id="pb_faq" className="pb_accordion" data-children=".item">
									<div className="item">
										<a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq1" aria-expanded="true" aria-controls="pb_faq1" className="pb_font-22 py-4">What is Tidal Cross?</a>
										<div id="pb_faq1" className="collapse show" role="tabpanel">
											<div className="py-3">
												<p>Tidal Cross is an application developed to help the contractors and professionals to make an order quicker. </p>
												<p>It will also help the shops to keep an efficient serivce by reducing the wait time for their coustomers orders.</p>
											</div>
										</div>
									</div>
									<div className="item">
										<a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq2" aria-expanded="false" aria-controls="pb_faq2" className="pb_font-22 py-4">Is this available to my country?</a>
										<div id="pb_faq2" className="collapse" role="tabpanel">
											<div className="py-3">
												<p>Currently the app is only available in the Maltese Islands. If you have any suggestions to open in another location please do not hesitate to get in contact with our team.</p>
											</div>
										</div>
									</div>
									<div className="item">
										<a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq3" aria-expanded="false" aria-controls="pb_faq3" className="pb_font-22 py-4">How do I use the features of Tidal Cross App?</a>
										<div id="pb_faq3" className="collapse" role="tabpanel">
											<div className="py-3">
												<p>Tidal Cross is a very simple app. First you need to create an account and choose if you're a Shop or a Customer. Registering as a customer it gives you the ability to create new orders or view the status of your orders. Registering as a shop/supplier gives you the ability to advertise your store and get orders.</p>
											</div>
										</div>
									</div>
									{/*<div className="item">
										<a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq4" aria-expanded="false" aria-controls="pb_faq4" className="pb_font-22 py-4">How much do the Tidal Cross App cost?</a>
										<div id="pb_faq4" className="collapse" role="tabpanel">
											<div className="py-3">
												<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
											</div>
										</div>
									</div>*/}

									<div className="item">
										<a data-toggle="collapse" data-parent="#pb_faq" href="#pb_faq5" aria-expanded="false" aria-controls="pb_faq5" className="pb_font-22 py-4">I have technical problem, who do I email?</a>
										<div id="pb_faq5" className="collapse" role="tabpanel">
											<div className="py-3">
												<p>If you have an issue with the way the system works you can use the "Contact Us" page at any time. If it's an issue with an order you have to contact the suppliers on their contact information. </p>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>


			</div>
		)
	}
}