import React from 'react';

import './word-item.styles.scss';

const WordItem = ({word_name, word_trans}) => (
   <div className='word-item'>
      <span><p>{word_name}</p></span> : 
      <span><p>{word_trans}</p></span>
   </div>
)

export default WordItem;