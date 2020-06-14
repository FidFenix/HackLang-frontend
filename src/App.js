import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HeaderComp from './components/header/header.component';
import HomePageComp from './pages/home/home-page.component';
import SignInAndSignUpPageComp from './pages/sign-in-sign-up/sign-in-sign-up-page.component';
import GroupPageComp from './pages/groups/groups-page.component';
import PrivateRouteHoC from './components/private-route/private-route.component';
import SingleGroupPageComp from './pages/single-group/single-group-page.component';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentUser: true,
    }
  }

  render() {
    return(
      <div>
        <HeaderComp/>
        <Switch>
          <Route exact path = '/' component = { HomePageComp }></Route>
          <Route path = '/groups/:langId' component = { SingleGroupPageComp }></Route>
          <PrivateRouteHoC exact path='/groups' component={GroupPageComp} currentUser = {this.state.currentUser}></PrivateRouteHoC>
          <Route exact path='/signin' render={()=>this.state.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPageComp/>)}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
