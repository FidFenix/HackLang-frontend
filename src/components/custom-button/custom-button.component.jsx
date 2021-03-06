import React from 'react';

import './custom-button.styles.scss';

//childre brings all between <button>example this one </button>
/*
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
*/
const CustomButton = ({
    children,
    isGoogleSignIn, 
    inverted,
     ...otherProps
    }) => (
    <button 
        className = {`${inverted? 'inverted':''} 
                      ${isGoogleSignIn? 'google-sign-in':''} custom-button`} 
                      {...otherProps}
        >
        {children}
    </button>
);

export default CustomButton;