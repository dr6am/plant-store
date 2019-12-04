import React from 'react';
import './signIn.scss';
import  CustomBtn from './../custom-btn/custom-btn';
import {signInWithGoogle} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    state = {
        email:'', 
        password:''
    }
    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]:[value]})
    }
    handleSubmit = e =>{
        e && e.preventDefault();
        console.log(e.target)
    }
    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <div className="group">
                    <input className="form-input"
                    type="email" name="email" 
                    id="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    required/>
                    
                    <label htmlFor="email" className={this.state.email.length>=0 ? "focused form-input-label" : "form-input-label"}>Email</label>
                    </div>
                    <div className="group">
                    <input className="form-input" type="password" name="password" id="pswd" value={this.state.password} 
                    onChange={this.handleChange} required/>
                    <label htmlFor="password" className="form-input-label">Password</label>
                    </div>
                    <CustomBtn type="submin">Login</CustomBtn>
                    <CustomBtn onClick={(e)=>signInWithGoogle()}>sign in with google</CustomBtn>
                </form>
            </div>
        )
    }
}

export default SignIn;