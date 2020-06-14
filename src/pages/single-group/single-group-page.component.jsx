import React, { Component } from 'react';

import './single-group-page.styles.scss';
import GroupComp from '../../components/group/group.component';

class SingleGroupPageComp extends Component {

   render() {
      return(
         <GroupComp { ...this.props}/>
      )
   }
}

export default SingleGroupPageComp;