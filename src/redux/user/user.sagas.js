import { takeLatest,all,call } from 'redux-saga/effects';
import userActionTypes from "./user.types";
import {auth, googleProvider} from './../../firebase/firebase.util';


export function* signInWithGoogle() {
	console.log("sign In with google")
	try{
		const userRef = yield auth.signInWithPopup(googleProvider)
		console.log(userRef)
	}catch (e) {}
}

export function* onGoogleSignInStart() {
	console.log("on google sign")
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	console.log("userSagas()")
	yield all([
		call(onGoogleSignInStart)
	]);
}

