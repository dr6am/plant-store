import React from 'react';
import FormInput from './../form-input/form-input';
import './signIn.scss';
import CustomBtn from './../custom-btn/custom-btn';
import { signInWithGoogle } from '../../firebase/firebase.util';
class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: [value] })
    }
    handleSubmit = e => {
        e && e.preventDefault();
        console.log(e.target)
    }
    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
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
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn={true}>
                            Sign in with Google
            </CustomBtn>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;