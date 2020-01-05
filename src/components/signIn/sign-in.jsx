import React, {Component} from 'react';
import FormInput from './../form-input/form-input';
import './signIn.scss';
import CustomBtn from './../custom-btn/custom-btn';
import {auth, signInWithGoogle} from './../../firebase/firebase.util'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};
	handleSubmit = async event => {
		event.preventDefault();
		
		const {email, password} = this.state;
		
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
		} catch (error) {
			console.log(error);
		}
	};
	
	handleChange = event => {
		const {value, name} = event.target;
		
		this.setState({[name]: value});
	};
	
	render() {
		
		
		const {email, password} = this.state;
		return (
			<div className="sign-in">
				<h2 className={"title"}> I already have an account</h2>
				<span className={"subtitle"}>Sign in with your email and password</span>
				
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomBtn type='submit'> Sign in </CustomBtn>
						
						<CustomBtn type="button" onClick={signInWithGoogle} isGoogleSignIn={true}>
							Sign in with Google
						</CustomBtn>
					</div>
				
				</form>
			</div>
		)
		
	}
}

export default SignIn;