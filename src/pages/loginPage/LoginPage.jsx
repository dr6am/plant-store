import React from 'react';
import SignIn from "./../../components/signIn/sign-in";
import SignUp from './../../components/signUp/signUp';
import './LoginPage.scss';
class LoginPage extends React.Component{

    render(){
        return(
            <div className="loginPage">
                <SignIn/>
                <SignUp/>
            </div>
        )
    }
}

export default LoginPage;