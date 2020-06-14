import React from 'react';

import './home-page.styles.scss';

const HomePageComp = ({history, match}) => {
   return(
      <div className='home-page'>
         <div className='buttons-container'>
         </div>
         <div className='buttons-container'>
            <button className="btn"
             onClick = {()=> history.push( `${match.url}signin`)}
            >
               Sign In
            </button>
            <button className="btn">Facebook</button>
         </div>
      </div>
   )
}
export default HomePageComp;