import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import SignOut from './Components/SignOut/SignOut';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
//import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

import Order from './Components/Order/Order';

class App extends Component {
    state = {
        isLoggedin: false
    }

    handleLogIn = () => {
        this.setState({
            isLoggedin: true
        })
    }

    handleLogOut = () => {
        this.setState({
            isLoggedin: false
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Nav />
                <div className='App'>

                    <Route path="/" component={Home} exact />

                    <Route path="/signin" component={SignIn} exact />

                    <Route path="/signup" component={SignUp} exact />

                    <Route path="/signout" component={SignOut} exact />

                    <Route path="/profile" component={Profile} exact />

                    <Route path="/dashboard" component={Dashboard} exact />

                    <Route path="/order" component={Order} exact />



                </div>
                <Footer />
            </BrowserRouter>

        );
    }


}

export default App;