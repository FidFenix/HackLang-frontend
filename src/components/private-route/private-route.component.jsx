import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { selectCurrentUser } from '../../redux/user/user.selectors';
//import { createStructuredSelector } from 'reselect';

const PrivateRouteHoC = ({ currentUser, component: Component , path})=> {
    return(
    <Route path={path} render={(props) => (
        currentUser?
          <Component {...props}/>
          :
          <Redirect to='/signin' />
      )} />
)};


//const mapStateToProps = createStructuredSelector({
//    currentUser: selectCurrentUser,
//});

//export default connect(mapStateToProps)(PrivateRouteHoC);

export default PrivateRouteHoC;