import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage.jsx";
import CheckOutPage from './pages/check-out-page/check-out'
import {Redirect, Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import LoginPage from './pages/loginPage/LoginPage';
import Header from './components/header/header';
import {connect} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect';


class App extends React.Component {
	unsubscribeFromAuth = null;
	
	componentDidMount() {
		const {checkUserSession} = this.props;
		checkUserSession();
	}
	
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	render() {
		return (
			
			<div>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={HomePage}/>
					<Route path={"/shop"} component={ShopPage}/>
					<Route exact path={"/checkOut"} component={CheckOutPage}/>
					<Route
						exact
						path='/login'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/'/>
							) : (
								<LoginPage/>
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
