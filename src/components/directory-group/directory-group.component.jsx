import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import './directory-group.styles.scss';
import DirectoryItemComp from '../directory-item/directory-item.component';

class DirectoryGroupComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         group_list:[{
            group_id: "1",
            group_lan: "German",
            group_link: "german"
         },
         {
            group_id: "2",
            group_lan: "Spanish",
            group_link: "spanish"
         },
         {
            group_id: "3",
            group_lan: "English",
            group_link: "english"
         },
         {
            group_id: "4",
            group_lan: "Holandes",
            group_link: "german"
         },
         {
            group_id: "5",
            group_lan: "Quechua",
            group_link: "german"
         },
         {
            group_id: "6",
            group_lan: "Frances",
            group_link: "german"
         }],
      }
   }
   render() {
      const { group_list } = this.state;
      return(
         <div className='directory-container'>
            {
               group_list.map(({group_id, ...otherProps}) => (
                  <DirectoryItemComp key = {group_id} {...otherProps} {...this.props}/>
               ))
            }
         </div>
      )
   }
}

export default withRouter(DirectoryGroupComp);