import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import CustomBtn from './../custom-btn/custom-btn'
import './signUp.scss';
import FormInput from './../form-input/form-input';


class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confrimPassword: ''
    }
    handleSubmit = async e =>{
        e && e.preventDefault();
        const {displayName, email, password,confrimPassword} = this.state;
        if(password !== confrimPassword){
            alert("Password don't match")
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confrimPassword: ''
            })
        }catch(e){
            alert(e.message)
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div className="sign-up">
            <h2> I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit} >
                <div className="group">
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}     
                        onChange={this.handleChange}
                        label='Ur name'
                        required
                    />
                     <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}     
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                     <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}     
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                     <FormInput 
                        type='password'
                        name='confrimPassword'
                        value={this.state.confrimPassword}     
                        onChange={this.handleChange}
                        label='confrim password'
                        required
                    />
                    <CustomBtn type="submit">Sign up</CustomBtn>
                </div>
                
            </form>
        </div>)
    }
}
export default SignUp