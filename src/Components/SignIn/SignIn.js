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
            return (<p>{this.state.error}</p>);
        }
    }

    componentDidMount() {
        this.renderRedirect();
    }

    render() {
        return (
            <div className="column center">
                <div className="white">
                    <div className="row center">
                        <div className="col-1">

                            <h1>Login</h1>
                            <form onSubmit={this.handleSubmit} >
                                <input type="Text" id="useremail" name="useremail" placeholder="Email Address" title="Enter Phone Number" required /><br />
                                <input type="Password" id="userpassword" name="userpassword" placeholder="Password" title="Enter Pin Number" required /><br />
                                <button id="btnLoginSubmit" className="black" type="submit">Sign In</button>
                            </form>
                            {this.showerror()}
                            {this.renderRedirect()}
                            <a href="/SignUp"> Don't have an account? Register</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}