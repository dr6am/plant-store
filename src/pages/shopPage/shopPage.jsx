import React from 'react'
import './shopPage.scss';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionOverview from './../../components/collection-overview/collection-overview'
import CollectionPage from '../collection/collection.component';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'
import WithSpinner from '../../components/with-spinner/with-spinner.component';



const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner =WithSpinner(CollectionPage)
class  ShopPage extends React.Component{
    state = {
        isLoading:true
    }
    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
            
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            this.props.update_collections(collectionsMap)
            this.setState({isLoading:false})
        })
    }
    render(){
        const {match} = this.props
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props=><CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props} /> }/>
                <Route path={`${match.path}/:collectionId`} render={props=><CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    update_collections:collectionsMap=>dispatch(updateCollections(collectionsMap))

})

export default connect(null,mapDispatchToProps)(ShopPage) ;