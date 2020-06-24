import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './groups-page.styles.scss';


import DirectoryGroupComp from '../../components/directory-group/directory-group.component';
import SingleGroupPageComp from '../single-group/single-group-page.component';

import './groups-page.styles.scss';

class GroupPageComp extends Component {

   render() {
      const { match } = this.props;
      return(
            <div className = 'group-page-container'>
               <Route
                  path = {`${match.path}/:langId`}
                  component = { SingleGroupPageComp }
               >              
               </Route>
               <h1>My Languages</h1>
               <Route
                  exact path = {`${match.path}`}
                  render = {() => <DirectoryGroupComp {...this.props}/>}
               >              
               </Route>

            </div>
      )
   }
}

export default GroupPageComp;

