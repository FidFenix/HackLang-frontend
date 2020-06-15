import React from 'react';

import './vocab-list-item.styles.scss';

//onClick = {() => alert('fa')}
const VocabListItem = ({ vocab_title, onClick }) => (
   <div className = 'vocab-list-item-container'
        onClick = {onClick}
   >
      <h3>{vocab_title}</h3>
   </div>
)

export default VocabListItem;