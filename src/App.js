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
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Reset from './Components/Reset/Reset';
import Contact from './Components/Contact/Contact';
import TermsConditions from './Components/TermsConditions/TermsConditions';
import CookiePolicy from './Components/CookiePolicy/CookiePolicy';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

class App extends Component {
    state = {
        isLoggedIn: false
    }

    handleLogIn = () => {
        this.setState({
            isLoggedIn: true
        })
        this.forceUpdate();
    }

    handleLogOut = () => {
        this.setState({
            isLoggedIn: false
        })
        this.forceUpdate();
    }

    render() {
        return (
            <BrowserRouter>

                <Nav />
                <Header />

                <div className='App'>

                    <Route exact path="/" component={Home} />

                    <Route exact path="/signin" render={(routeProps) => {
                        return <SignIn handleLogIn={this.handleLogIn} {...routeProps} />
                    }} />

                    <Route exact path="/signup" render={(routeProps) => {
                        return <SignUp handleLogIn={this.handleLogIn} {...routeProps} />
                    }} /> 

                    <Route exact path="/signout" render={(routeProps) => {
                        return <SignOut handleLogOut={this.handleLogOut} {...routeProps} />
                    }} />

                    <Route exact path="/reset" component={Reset} />

                    <Route exact path="/profile" component={Profile} />

                    <Route exact path="/termsconditions" component={TermsConditions} />

                    <Route exact path="/cookiepolicy" component={CookiePolicy} />

                    <Route exact path="/privacypolicy" component={PrivacyPolicy} />

                    <Route exact path="/dashboard" component={Dashboard} />

                    <Route exact path="/orderdetails" component={OrderDetails} />

                    <Route exact path="/contact" component={Contact} />

                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;