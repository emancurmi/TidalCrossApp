import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import config from '../../config';
import engine from '../../engine';
import { bake_cookie, read_cookie } from 'sfcookies';
import crypto from 'crypto';

export default class SignIn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            config: config,
            userid: '',
            useremail: '',
            userpassword: '',
            username: '',
            userrole: '',
            error: null,
            isLoading: true,
            redirect: false
        }
    }

    setUser = user => {
        this.setState({
            userid: user[0].userid,
            useremail: user[0].useremail,
            userpassword: user[0].userpassword,
            error: null,
            isLoading: false,
            redirect: true
        })
        bake_cookie(config.cookie_key, engine.encrypt(this.state.userid.toString()));
        this.props.handleLogIn();
        this.renderRedirect()
    }

    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length !== 0) {
            return <Redirect to='/Dashboard/' />
        }
    }

    handleSubmit = e => {

        e.preventDefault();

        const { useremail, userpassword } = e.target;

        const user = {
            useremail: useremail.value.toLowerCase(),
            userpassword: userpassword.value
        }

        this.setState({ error: null })

        fetch(this.state.config.API_ENDPOINT + 'user/?useremail=' + user.useremail, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.state.config.API_TOKEN}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })

            .then(data => {
                if (data.length !== 0) {
                    let hexpassword = crypto.createHash('sha1').update(user.userpassword + config.API_SECURITY + data[0].userhex).digest('hex');

                    if (data[0].userhexpassword === hexpassword) {
                        useremail.value = '';
                        userpassword.value = '';
                        this.setUser(data);
                    }
                    else {
                        this.setState({ error: "User Information Incorrect" });
                    }
                }
                else {
                    console.error("User not found!")
                    this.setState({ error: "User not found!" });
                }
            })

            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (
                <div className="form-group text-center">
                    {this.state.error}
                </div>
            );
        }
    }

    componentDidMount() {
        this.renderRedirect();
    }

    render() {
        return (

            <div className="page-content">

                <div className="content-wrapper">

                    <div className="content d-flex justify-content-center align-items-center">

                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                        <h5 className="mb-0">Login to your account</h5>
                                        <span className="d-block text-muted">Your credentials</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="text" className="form-control" placeholder="E-mail Address" id="useremail" name="useremail" required/>
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="password" className="form-control" placeholder="Password" id="userpassword" name="userpassword" required />
                                        <div className="form-control-feedback">
                                            <i className="icon-lock2 text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex align-items-center">
                                        {/*<div className="form-check mb-0">
                                            <label className="form-check-label">
                                                <input type="checkbox" name="remember" className="form-input-styled" checked />
                                                            Remember
									        </label>
                                        </div>*/}

                                        <a href="/Reset" className="ml-auto">Forgot password?</a>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" id="btnLoginSubmit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2"></i></button>
                                    </div>

                                    {this.showerror()}

                                    <div className="form-group text-center text-muted content-divider">
                                        <span className="px-2">Don't have an account?</span>
                                    </div>

                                    <div className="form-group">
                                        <a href="/SignUp" className="btn btn-light btn-block">Sign up</a>
                                    </div>

                                    <span className="form-text text-center text-muted">By continuing, you're confirming that you've read our <a href="termsconditions">Terms &amp; Conditions</a> and <a href="cookiepolicy">Cookie Policy</a></span>
                                </div>
                            </div>
                        </form>
                        {this.renderRedirect()}
                    </div>
                </div>
            </div>
        )
    }
}