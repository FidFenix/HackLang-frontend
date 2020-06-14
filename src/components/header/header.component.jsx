import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

class HeaderComp extends Component {

   constructor(props) {
      super(props);

      this.state = {
         currentUser: true,
      }
   }

   render() {
      return(
         <div className = "header">
            <Link className = 'logo-container' to = '/'>
               <Logo className = 'logo'></Logo>
            </Link>
            <div className = 'options'>
               <Link className = 'option' to = '/'>Home</Link>
               {
                  this.state.currentUser?
                  <Link className = 'option' to = '/groups'>Groups</Link>
                  :
                  null
               }
               {
                  this.state.currentUser?
                  <Link className = 'option' to = '/stories'>Stories</Link>
                  :
                  null
               }
               {
                  this.state.currentUser?
                  <div className = 'option' onClick = {()=> alert('log out')}>Log out</div>
                  :
                  <Link className = 'option' to = '/signin'>Log in</Link>
               }
               {
                  this.state.currentUser?
                  <div><h1>Holi</h1></div>
                  :
                  null
               }
            </div>
         </div>
      )
   }
}

export default HeaderComp;