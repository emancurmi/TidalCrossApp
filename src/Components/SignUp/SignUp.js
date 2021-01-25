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
            username:'',
            useremail:'',
            userpassword: '',
            error: null,
            isLoading: true,
            redirect: false
        }
    }

    addUser = user => {
        this.setState({
            userid: user.userid,
            username: user.username,
            useremail: user.email,
            userpassword: user.userpin,
            redirect: true
        })
        bake_cookie(config.cookie_key, engine.encrypt(this.state.userid.toString()));
        this.props.handleLogIn();
        this.renderRedirect();
    }


    renderRedirect = () => {
        if (read_cookie(config.cookie_key).length !== 0) {
            return <Redirect to='/Dashboard/' showpopup='true' />
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { regusername, reguseremail, reguserpassword } = e.target;

        const user = {
            username: regusername.value,
            useremail: reguseremail.value,
            userpassword: reguserpassword.value,
        }

        this.setState({ error: null })

        fetch(this.state.config.API_ENDPOINT + 'user/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${this.state.config.API_TOKEN}`
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
                                <input type="email" id="reguseremail" name="reguseremail" placeholder="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" title="Enter email address" required /><br/>
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