import React , {Component} from 'react';
import {Switch,Route,Redirect ,withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Exhibition from './ExhibitionComponent';
import Footer from './FooterComponent';
import Buy from './BuyComponent';
import {connect} from 'react-redux';
import {fetchPaintings,loginUser} from '../redux/ActionCreators';
import ItemDetail from './PaintingDetail';

const mapStateToProps = state =>{
    return {
        paintings : state.paintings,
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchPaintings:()=>{dispatch(fetchPaintings())},
    loginUser:(creds)=>{dispatch(loginUser(creds))}
})

class Main extends Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchPaintings();
    }

    

    render()
    {

        const ItemWithId = ({match})=>{
            return(
                <ItemDetail item = 
                {this.props.paintings.paintings.filter((x)=> x._id === 
                match.params.PaintingId,10)[0]}/>
            );
        }
        return(
            <div>
                <Header loginUser = {this.props.loginUser}
                            auth = {this.props.auth}/>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/menu" component={()=><Exhibition paintings={this.props.paintings.paintings}/>} /> 
                    <Route exact path = "/menu/:PaintingId" component={ItemWithId}/>
                    <Route path = "/menu/:PaintingId/buy" component={Buy}/>
                    <Redirect to="/home"/> 
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter((connect(mapStateToProps,mapDispatchToProps)(Main)));