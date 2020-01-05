import React, {Component} from 'react';
import CustomBtn from './../custom-btn/custom-btn'
import './signUp.scss';
import FormInput from './../form-input/form-input';

import {auth, createUserProfileDocument} from './../../firebase/firebase.util';


class SignUp extends Component {
	state={
        displayName:"", email:"", password:"", confrimPassword:""
    }
	handleSubmit = async event => {
		event.preventDefault();
		
		const {displayName, email, password, confrimPassword} = this.state;
		console.log(password,confrimPassword)
		if (password !== confrimPassword) {
			alert("passwords don't match");
			return;
		}
		
		try {
			const {user} = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			
			await createUserProfileDocument(user, {displayName});
			
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};
	handleChange = (e) => {
		console.log({[e.target.name]: e.target.value})
		this.setState({[e.target.name]: e.target.value})
	}
	
	render() {
		
		const {displayName, email, password, confrimPassword} = this.state;
		const {handleChange, handleSubmit} = this;
		return (<div className="sign-up">
			<h2 className={"title"}> I do not have an account</h2>
			<span className={"subtitle"}>Sign up with your email and password</span>
			
			<form onSubmit={handleSubmit}>
				<div className="group">
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={handleChange}
						label='Your name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
						label='password'
						required
					/>
					<FormInput
						type='password'
						name='confrimPassword'
						value={confrimPassword}
						onChange={handleChange}
						label='confrim password'
						required
					/>
					<CustomBtn type="submit">Sign up</CustomBtn>
				</div>
			
			</form>
		</div>)
	}
}


export default SignUp;