import React from "react";

import './custom-btn.scss';

const CustomBtn= ({children, isGoogleSign, ...otherProps})=>(
<button className={isGoogleSign?"custom-button google-sign-in":"custom-button"} {...otherProps}>{children}</button>
)
export default  CustomBtn