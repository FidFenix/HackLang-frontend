import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderComp from './components/header/header.component';
import HomePageComp from './pages/home/home-page.component';
import SignInAndSignUpPageComp from './pages/sign-in-sign-up/sign-in-sign-up-page.component';
import GroupPageComp from './pages/groups/groups-page.component';
import PrivateRouteHoC from './components/private-route/private-route.component';
import SingleGroupPageComp from './pages/single-group/single-group-page.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

//import { authenticationService } from './services/user/auth.service';
import './App.scss';

class App extends Component{

  render() {
    return(
      <div>
        <HeaderComp/>
        <Switch>
          <Route exact path = '/' component = { HomePageComp }></Route>
          <PrivateRouteHoC path = '/groups/:langId' component = { SingleGroupPageComp }></PrivateRouteHoC>
          <PrivateRouteHoC exact path='/groups' component={GroupPageComp} currentUser = {this.props.currentUser}></PrivateRouteHoC>
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/groups'/>):(<SignInAndSignUpPageComp/>)}></Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(App);
