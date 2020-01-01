import React,{useState} from 'react';
import CustomBtn from './../custom-btn/custom-btn'
import './signUp.scss';
import FormInput from './../form-input/form-input';
import { signUpStart } from '../../redux/user/user.actions';
import {connect } from 'react-redux'
const SignUp =({signUpStart})=> {
    const [state,changeState] = useState({
        displayName: '',
        email: '',
        password: '',
        confrimPassword: ''
    })
    const handleSubmit = async e => {
        e && e.preventDefault();
        const {displayName, email, password, confrimPassword} = state;
       
        if (password !== confrimPassword) {
            alert("passwords don't match");
            return;
        }
    
        signUpStart({ displayName, email, password });
    }
    const handleChange = (e) => {
        changeState({...state,[e.target.name]: e.target.value})
    }
    const {displayName,email,password,confrimPassword} = state;
    return(<div className="sign-up">
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
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);