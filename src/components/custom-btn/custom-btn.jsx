import React from "react";

import './custom-btn.scss';

const CustomBtn= ({children, isGoogleSignIn, ...otherProps})=>(
<button className={isGoogleSignIn?"custom-button google-sign-in":"custom-button"} {...otherProps}>{children}</button>
)
export default  CustomBtn