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
import User from './userComponent';
import {connect} from 'react-redux';
import {fetchPaintings,loginUser,logoutUser,signupUser,fetchGallery
        ,postGallery} from '../redux/ActionCreators';
import ItemDetail from './PaintingDetail';

const mapStateToProps = state =>{
    return {
        paintings : state.paintings,
        auth : state.auth,
        galleries:state.galleries
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchPaintings:()=>{dispatch(fetchPaintings())},
    loginUser:(creds)=>{dispatch(loginUser(creds))},
    logoutUser : () => {dispatch(logoutUser())},
    signupUser : (creds) =>{dispatch(signupUser(creds))},
    fetchGallery:()=>{dispatch(fetchGallery())},
    postGallery : ()=>{dispatch(postGallery(newGallery))}
})

class Main extends Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchPaintings();
        this.props.fetchGallery();
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
                auth = {this.props.auth}/>
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

        return(
            <div>
                <Header loginUser = {this.props.loginUser}
                            auth = {this.props.auth}
                            logoutUser = {this.props.logoutUser}/>
                <Switch>
                    
                    
                    <Route path="/home" component={Home} />
                    <Route exact path="/user/:username" component = {()=> <User auth={this.props.auth} 
                                                        galleries = {this.props.galleries.galleries.filter((x)=>x.user.username === this.props.auth.user.username)}/>}
                                                        auth={this.props.auth}
                                                        postGallery = {this.props.postGallery}/>
                    <Route path="/galleries/:Gname" component = {GalleryWithId}/>
                    <Route path="/user/:username/:Gname" component = {GalleryWithId}/>
                    <Route path="/signup" component = {registeruser}/>
                    <Route path = "/galleries" component = {displayGallery}/>
                    
                    <Route exact path="/paintings" component ={displayPaintings}/>
                    <Route exact path = "/paintings/:PaintingId" component={ItemWithId}/>
                    <Route exact path="/menu" component={()=><Exhibition paintings={this.props.paintings.paintings}/>} /> 
                    <PrivateRoute exact path = "/menu/:PaintingId/buy" component={Buy}/>
                    <Redirect to="/home"/> 
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter((connect(mapStateToProps,mapDispatchToProps)(Main)));