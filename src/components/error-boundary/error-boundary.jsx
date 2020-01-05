import React from 'react';
import './error.scss';
import * as img from '../../assets/404.png';
class ErrorBoundary extends React.Component{
	constructor(){
		super();
		
		this.state = {
			hasErrored:false
		}
	}
	
	static getDerivedStateFromError(e){
		//proccess the err
		return {hasErrored:true}
	}
	
	componentDidCatch(error,info) {
		console.log(error)
	}
	render(){
		if(this.state.hasErrored){
			return(
				<div className="errorPage">
					<img src={img} alt=""/>
					<h1>This Page is Buried in the Sand</h1>
					<p>You have never seen an ostrich head. Whenever you’re around it seems ostriches are avoiding your gaze. You came on this trip specifically to see an ostrich head, but here is this ostrich right in front of you, head invisible. You may never see an ostrich head.</p>
				</div>
			)
		}
		return this.props.children
	}
}
export default ErrorBoundary;