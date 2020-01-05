import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import ErrorBoundary from "./components/error-boundary/error-boundary";
import CurrentUserContext from "./contexts/current-user/current-user.context";

import {auth, createUserProfileDocument} from "./firebase/firebase.util";
import Spinner from "./components/spinner/spinner";

const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const CheckOutPage = lazy(() => import('./pages/check-out-page/check-out'));
const ShopPage = lazy(() => import('./pages/shopPage/shopPage'));
const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currentUser: null}
		this.unsubscribeFromAuth = null
		
	}
	
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					this.setState({
							currentUser: {
								id: snapshot.id,
								...snapshot.data()
							}
						}
					)
				});
			}
			this.setState({currentUser: userAuth});
		});
	}
	
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	render() {
		
		return (
			<React.Fragment>
				<CurrentUserContext.Provider value={this.state.currentUser}>
					<Header/>
				</CurrentUserContext.Provider>
				<Switch>
					<ErrorBoundary>
						<Suspense fallback={<Spinner/>}>
							<Route exact path={"/"} component={HomePage}/>
							<Route path={"/shop"} component={ShopPage}/>
							<Route exact path={"/checkOut"} component={CheckOutPage}/>
							<Route
								exact
								path='/login'
								render={() =>{console.log();return(
									this.state.currentUser ? (
										<Redirect to='/'/>
									) : (
										<LoginPage/>
									))}
								}
							/>
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</React.Fragment>
		);
	}
}


export default App;
