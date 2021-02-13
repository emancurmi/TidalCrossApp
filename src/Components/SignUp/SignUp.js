import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import config from '../../config';
import engine from '../../engine';
import { bake_cookie, read_cookie } from 'sfcookies';

export default class SignUp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            config: config,
            userid: '',
            username: '',
            useremail: '',
            userphone: '',
            userpassword: '',
            userrole: '',
            error: null,
            isLoading: true,
        }
    }

    addUser = user => {
        this.setState({
            userid: user.userid,
            username: user.username,
            useremail: user.email,
            userphone: user.phone,
            userpassword: user.userpassword,
            userrole: user.userrole,
        })
        bake_cookie(config.cookie_key, engine.encrypt(this.state.userid.toString()));
        this.props.handleLogIn();
        this.renderRedirect()
    }


    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length !== 0) {
            return <Redirect to='/dashboard/' />
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { regusername, reguserphone, reguseremail, reguserpassword, regisshop } = e.target;

        let selectedrole = "user"

        if (regisshop.checked === true) {
            selectedrole = "member";
        }

        console.log(selectedrole);

        const user = {
            username: regusername.value,
            useremail: reguseremail.value.toLowerCase(),
            userphone: reguserphone.value,
            userpassword: reguserpassword.value,
            userrole: selectedrole
        }

        this.setState({ error: null })

        fetch(this.state.config.API_ENDPOINT + 'user/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
            }
        })

            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error));
                }
                return res.json();
            })

            .then(data => {
                regusername.value = '';
                reguseremail.value = '';
                reguserphone.value = '';
                reguserpassword.value = '';
                this.addUser(data);
            })

            .catch(error => {
                console.error(error);
                this.setState({ error })
            })
    }

    showerror = () => {
        if (this.state.error != null) {
            return (<p>{this.state.error}</p>);
        }
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
                                        <h5 className="mb-0">Create a new account</h5>
                                        <span className="d-block text-muted">Your credentials</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="text" className="form-control" placeholder="Name" id="regusername" pattern="[A-Za-z\s]+" name="regusername" required />
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="email" className="form-control" placeholder="E-mail Address" id="reguseremail" name="reguseremail" required />
                                        <div className="form-control-feedback">
                                            <i className="icon-envelope text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="phone" className="form-control" placeholder="Phone" id="reguserphone" name="reguserphone" required />
                                        <div className="form-control-feedback">
                                            <i className="icon-phone text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="password" className="form-control" placeholder="Password" id="userpassword" name="userpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                        <div className="form-control-feedback">
                                            <i className="icon-lock2 text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex align-items-center">
                                        <div className="form-check mb-0">
                                            <label className="form-check-label">
                                                <input type="checkbox" name="remember" id="regisshop" name="regisshop" className="form-input-styled" />
                                                            Register as a store
									        </label>
                                        </div>

                                        {/*<a href="login_password_recover.html" className="ml-auto">Forgot password?</a>*/}
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" id="btnRegisterSubmit" className="btn btn-primary btn-block">Sign Up <i className="icon-circle-right2 ml-2"></i></button>
                                    </div>

                                    {this.showerror()}

                                    <div className="form-group text-center text-muted content-divider">
                                        <span className="px-2">Already have an account?</span>
                                    </div>

                                    <div className="form-group">
                                        <a href="/Signin" className="btn btn-light btn-block">Sign In</a>
                                    </div>

                                    <span className="form-text text-center text-muted">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                                </div>
                            </div>
                        </form>
                        {this.renderRedirect()}
                    </div>
                </div>
            </div>




            //<div className="column center">
            //    <div className="white">
            //        <div className="row center">
            //            <div className="col-1">
            //                {this.renderRedirect()}
            //                <h1>Register</h1>
            //                <form onSubmit={this.handleSubmit} >
            //                    <input type="text" id="regusername" name="regusername" placeholder="Name" pattern="[A-Za-z\s]+" title="User name should be made up of Capital and small letters Only" required /><br />
            //                    <input type="email" id="reguseremail" name="reguseremail" placeholder="E-mail" title="Enter email address" required /><br />
            //                    <input type="phone" id="reguserphone" name="reguserphone" placeholder="Phone" title="Enter phone number" required /><br />
            //                    <input type="password" id="reguserpassword" name="reguserpassword" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            //                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br />
            //                    <input type="checkbox" id="regisshop" name="regisshop" value="member"/><label for="regisshop">Register as Shop</label><br/>
            //                    <button id="btnRegisterSubmit" className="black" type="submit">Register</button>
            //                </form>
            //                {this.showerror()}
            //                <a href="/SignIn"> Already have an account? Sign In</a>
            //            </div>
            //        </div>
            //    </div>
            //</div>
        )
    }
}