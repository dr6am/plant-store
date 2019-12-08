import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage.jsx";
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import LoginPage from './pages/loginPage/LoginPage';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Header from './components/header/header';

class App extends React.Component {
  state={
    currentUser:null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async UserAuth=>{
      if(UserAuth){
        const userRef = await createUserProfileDocument(UserAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
        
      }
      else{
        this.setState({currentUser: UserAuth});
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/login"} component={LoginPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
