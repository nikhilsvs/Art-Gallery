import React , {Component} from 'react';
import {Switch,Route,Redirect ,withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Exhibition from './ExhibitionComponent';
import Footer from './FooterComponent';
import Buy from './BuyComponent';
import Signup from './signupComponent';
import Galleries from './GalleriesComponent';
import Paintings from './paintingComponent';
import GalleryDetail from './GalleryDetailComponent';
import ExhibitionDetail from './ExhibitionDetailComponent';
import User from './userComponent';
import {connect} from 'react-redux';
import {fetchPaintings,loginUser,logoutUser,signupUser,fetchGallery
        ,postGallery,postPainting,fetchExhibitions} from '../redux/ActionCreators';
import ItemDetail from './PaintingDetail';

const mapStateToProps = state =>{
    return {
        paintings : state.paintings,
        auth : state.auth,
        galleries:state.galleries,
        exhibitions:state.exhibitions
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchPaintings:()=>{dispatch(fetchPaintings())},
    loginUser:(creds)=>{dispatch(loginUser(creds))},
    logoutUser : () => {dispatch(logoutUser())},
    signupUser : (creds) =>{dispatch(signupUser(creds))},
    fetchGallery:()=>{dispatch(fetchGallery())},
    postGallery : (creds)=>{dispatch(postGallery(creds))},
    postPainting:(creds,Gid)=>{dispatch(postPainting(creds,Gid))},
    fetchExhibitions : () => {dispatch(fetchExhibitions())}
})

class Main extends Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchPaintings();
        this.props.fetchGallery();
        this.props.fetchExhibitions();
    }
    render()
    {

        const ItemWithId = ({match})=>{
            return(
                <ItemDetail item = 
                {this.props.paintings.paintings.filter((x)=> x._id === 
                match.params.PaintingId)[0]}
                auth = {this.props.auth}/>
            );
        }
        const registeruser = () =>{
            return(
                <Signup signupUser={this.props.signupUser}/>
            )
        }

        const displayGallery = ()=>{
            return(
                <Galleries items = {this.props.galleries.galleries}/>
            )
        }
        const displayPaintings =()=>{
            return(
                <Paintings paintings={this.props.paintings.paintings}/>
            )
        }
        const GalleryWithId = ({match})=>{
            return(
                <GalleryDetail gallery = {this.props.galleries.galleries.filter((x)=>x.name === match.params.Gname)[0]}
                auth = {this.props.auth}
                postPainting={this.props.postPainting}/>
            )
        }
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.auth.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/home',
                    state: { from: props.location }
                  }} />
            )} />
          );
        const ExhibitionWithId =({match})=>{
            return(
                <ExhibitionDetail exhibition = 
                {this.props.exhibitions.exhibitions.filter((x)=>x._id === match.params.eid)[0]}/>
            )
        }
        const displayUserId = () =>{
            return(
                <User auth={this.props.auth} 
                galleries = {this.props.galleries.galleries.filter((x)=>x.user.username === this.props.auth.user.username)}
                auth={this.props.auth}
                postGallery = {this.props.postGallery}/>
            );
        }
        return(
            <div>
                <Header loginUser = {this.props.loginUser}
                            auth = {this.props.auth}
                            logoutUser = {this.props.logoutUser}/>
                <Switch>
                    
                    
                    <Route path="/home" component={Home} />
                    <Route exact path="/user/:username" component = {displayUserId}/>
                    <Route path="/galleries/:Gname" component = {GalleryWithId}/>
                    <Route path="/user/:username/:Gname" component = {GalleryWithId}/>
                    <Route path="/signup" component = {registeruser}/>
                    <Route path = "/galleries" component = {displayGallery}/>
                    
                    <Route exact path="/paintings" component ={displayPaintings}/>
                    <Route exact path = "/paintings/:PaintingId" component={ItemWithId}/>
                    <Route exact path="/menu" component={()=><Exhibition exhibitions={this.props.exhibitions.exhibitions}/>} />
                    <Route path = "/menu/:eid" component = {ExhibitionWithId}/> 
                    <PrivateRoute exact path = "/menu/:PaintingId/buy" component={Buy}/>
                    <Redirect to="/home"/> 
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter((connect(mapStateToProps,mapDispatchToProps)(Main)));