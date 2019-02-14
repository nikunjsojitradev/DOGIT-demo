import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch, withRouter} from 'react-router-dom';

import {PrivateRoute, PublicRoute, NotFoundRoute} from './components/routes/routes';
import Login from './containers/login/login';
import UserHome from './containers/home/home';

import './App.css';
import UserManage from "./containers/userManage/userManage";
import About from "./containers/about/about";
import NotFound from "./components/NotFound/notFound";
import Register from "./containers/register";
import Home from "./components/home"

class App extends Component {
    render() {
        return (
            <Switch>
                <PublicRoute exact path='/login' user={this.props.user} component={Login}/>
                <PublicRoute exact path='/register' user={this.props.user} component={Register} />
                <PublicRoute exact path='/Home' user={this.props.user} component={Home} />
                <PrivateRoute exact path='/' user={this.props.user} component={UserHome}/>
                <PrivateRoute exact path='/ManageUser' user={this.props.user} component={UserManage}/>
                <PrivateRoute exact path='/about' user={this.props.user} component={About}/>
                <NotFoundRoute user={this.props.user} component={NotFound} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
