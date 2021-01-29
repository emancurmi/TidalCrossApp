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
//<Route path="/signin" component={SignIn} exact />
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

                    <Route exact path="/" component={Home} />

                    <Route path="/signin" exact render={(routeProps) => {
                        return <SignIn handleLogIn={this.handleLogIn} {...routeProps} />
                    }} />

                    <Route exact path="/signup" exact render={(routeProps) => {
                        return <SignUp handleLogIn={this.handleLogIn} {...routeProps} />
                    }} /> 

                    <Route path="/signout" exact render={(routeProps) => {
                        return <SignOut handleLogOut={this.handleLogOut} {...routeProps} />
                    }} />

                    <Route exact path="/profile" component={Profile} />

                    <Route exact path="/dashboard" component={Dashboard} />

                    <Route exact path="/order" component={Order} />



                </div>
                <Footer />
            </BrowserRouter>

        );
    }
    

}

export default App;