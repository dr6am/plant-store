import React from "react";

import './custom-btn.scss';

const CustomBtn= ({children, isGoogleSignIn,inverted, ...otherProps})=>(
<button className={`${inverted?"custom-button inverted":""} ${isGoogleSignIn?"custom-button google-sign-in":""} custom-button`} {...otherProps}>{children}</button>
)
export default  CustomBtn