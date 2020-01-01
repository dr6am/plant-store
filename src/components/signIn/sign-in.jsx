import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input';
import './signIn.scss';
import CustomBtn from './../custom-btn/custom-btn';

import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions';

const SignIn = ({googleSignInStart, emailSignInStart}) => {
	const [useCredentials, setCredentials] = useState({email: '', password: ''});
	
	const handleChange = e => {
		const {value, name} = e.target;
		
		setCredentials({...useCredentials, [name]: value});
	};
	
	const handleSubmit = async e => {
		e && e.preventDefault();
		const {email, password} = useCredentials;
		
		emailSignInStart(email, password);
	};
	
	const {email, password} = useCredentials;
	return (
		<div className="sign-in">
			<h2 className={"title"}> I already have an account</h2>
			<span className={"subtitle"}>Sign in with your email and password</span>
			
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={email}
					label='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<div className='buttons'>
					<CustomBtn type='submit'> Sign in </CustomBtn>
					
					<CustomBtn type="button" onClick={googleSignInStart} isGoogleSignIn={true}>
						Sign in with Google
					</CustomBtn>
				</div>
			
			</form>
		</div>
	)
	
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({email, password}))
});
export default connect(null, mapDispatchToProps)(SignIn);