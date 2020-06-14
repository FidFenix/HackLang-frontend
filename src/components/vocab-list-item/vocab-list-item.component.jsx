import React from 'react';

import './vocab-list-item.styles.scss';

const VocabListItem = ({ vocab_title, vocab_items  }) => (
   <div className = 'vocab-list-item-container'>
      <h3>{vocab_title}</h3>
   </div>
)

export default VocabListItem;