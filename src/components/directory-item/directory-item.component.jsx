import React from 'react';

import './directory-item.styles.scss';

import { withRouter } from 'react-router-dom';

const DirectoryItemComp = ({group_lan, group_link, match, history}) => {
   return(
      <div className = 'directory-item-container'
           onClick = {()=> history.push(`${match.url}/${group_link}`)}
      >
         <div className = 'flag'>
         </div>
         <div className = 'lan-name'>
            <h2 className = 'lan'>{group_lan}</h2>
         </div>
      </div>
   )
}
export default withRouter(DirectoryItemComp);