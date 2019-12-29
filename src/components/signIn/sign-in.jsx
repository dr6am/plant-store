import React from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input';
import './signIn.scss';
import CustomBtn from './../custom-btn/custom-btn';
import {auth} from '../../firebase/firebase.util';
import {googleSignInStart} from "../../redux/user/user.actions";

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	};
	handleChange = e => {
		const {value, name} = e.target;
		
		this.setState({[name]: value})
	};
	handleSubmit = async e => {
		e && e.preventDefault();
		const {email, password} = this.state;
		
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
			
		} catch (e) {
			alert(e)
		}
	};
	
	render() {
		const {googleSignInStart} = this.props;
		return (
			<div className="sign-in">
				<h2> I already have an account</h2>
				<span>Sign in with your email and password</span>
				
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart())
});
export default connect(null, mapDispatchToProps)(SignIn);