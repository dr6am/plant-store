import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage.jsx";
import CheckOutPage from './pages/check-out-page/check-out'
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import LoginPage from './pages/loginPage/LoginPage';
//import { auth, createUserProfileDocument} from './firebase/firebase.util';
import Header from './components/header/header';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){/*
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async UserAuth=>{
      if(UserAuth){
        const userRef = await createUserProfileDocument(UserAuth);
        userRef.onSnapshot(snapshot=>{
          this.props.setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.props.setCurrentUser( UserAuth);
    })*/
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  /* currentUser={this.state.currentUser}*/
  render() {
    return (
      
      <div>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route exact path={"/checkOut"} component={CheckOutPage} />
          <Route
            exact
            path='/login'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,     
  })

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
