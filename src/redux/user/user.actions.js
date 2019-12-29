import userActionTypes from './user.types'

export const setCurrentUser = user=>({
    type: userActionTypes.SET_CURRENT_USER,
    payload:user  
});

export const googleSignInStart = ()=>({
    type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user)=>({
    type:userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})
export const googleSignInFailure = e =>({
    type:userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:e
})

export const emailSignInStart = ()=>({
    type: userActionTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = (user)=>({
    type:userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})
export const emailSignInFailure = e =>({
    type:userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:e
})
