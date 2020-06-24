import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { setCurrentUser } from './../../redux/user/user.actions';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import './header.styles.scss';

//                        style={{background:`url(${this.props.currentUserpicture.url})`}}
class HeaderComp extends Component {

   render() {
      return(
         <div className = "header">
            <Link className = 'logo-container' to = '/'>
               <Logo className = 'logo'></Logo>
            </Link>
            <div className = 'options'>
               <Link className = 'option' to = '/'>Home</Link>
               {
                  this.props.currentUser?
                  <Link className = 'option' to = '/groups'>Groups</Link>
                  :
                  null
               }
               {
                  this.props.currentUser?
                  <div className = 'option' onClick = {()=> this.props.setCurrentUser(undefined)}>Log out</div>
                  :
                  <Link className = 'option' to = '/signin'>Log in</Link>
               }
               {/*
                  this.props.currentUser?
                  <div className = 'user-picture'
                  style={{background:`url(${this.props.currentUser.picture.data.url})`}}
                  >
                  </div>
                  :
                  null*/
               }
            </div>

         </div>
      )
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);