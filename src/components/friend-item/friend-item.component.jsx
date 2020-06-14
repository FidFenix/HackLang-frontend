import React from 'react';

import './friend-item.styles.scss';
const FriendItem = ({ name, country }) => (
   <div className = 'friend-item-container'>
      <span className = 'name'>{ name }</span>
      <span className = 'country'>{ country }</span>
   </div>
)
export default FriendItem;