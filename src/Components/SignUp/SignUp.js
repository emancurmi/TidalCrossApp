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

        const { regusername, reguserphone, reguseremail, reguserpassword } = e.target;

        const user = {
            username: regusername.value,
            useremail: reguseremail.value.toLowerCase(),
            userphone: reguserphone.value,
            userpassword: reguserpassword.value,
            userrole: 'user'
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
                console.log(data);
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
            <div className="column center">
                <div className="white">
                    <div className="row center">
                        <div className="col-1">
                            {this.renderRedirect()}
                            <h1>Register</h1>
                            <form onSubmit={this.handleSubmit} >
                                <input type="text" id="regusername" name="regusername" placeholder="Name" pattern="[A-Za-z\s]+" title="User name should be made up of Capital and small letters Only" required /><br />
                                <input type="email" id="reguseremail" name="reguseremail" placeholder="E-mail" title="Enter email address" required /><br />
                                <input type="phone" id="reguserphone" name="reguserphone" placeholder="Phone" title="Enter phone number" required /><br />
                                <input type="password" id="reguserpassword" name="reguserpassword" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br />
                                <button id="btnRegisterSubmit" className="black" type="submit">Register</button>
                            </form>
                            {this.showerror()}
                            <a href="/SignIn"> Already have an account? Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}