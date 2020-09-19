import React , {Component}  from 'react';
import {Breadcrumb,BreadcrumbItem,Card,CardImg,CardImgOverlay,CardTitle,
CardBody,Button,Media,MediaBody,CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../baseUrl';

function RenderItem({item}){
    return(
        <Media>
            <Media left>
                <Media><strong>{item.name}</strong></Media>
                <Media><strong>Starts on : {item.Date}</strong></Media>
            </Media>
            <Media className="ml-auto">
                <Link to={`/menu/${item._id}`} className="btn btn-dark">Enter <span className="fa fa-arrow-right"/> </Link>
            </Media>
        </Media>
    );
}

class Exhibition extends Component{
    constructor(props){
        super(props);
    }

    

    render(){
        const collection = this.props.exhibitions.map((x)=>{
            return(
                <div className = "col-12 col-md-8 offset-md-2">
                    <RenderItem item={x}/>

                    <hr className="divider"></hr>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active >Exhibition</BreadcrumbItem>
                </Breadcrumb>
                </div>
            
                <div className = "row">
                    <div className="col-8 offset-2">
                        <Card>
                            <CardHeader className="text-center">
                                <strong>Exhibitions</strong>
                            </CardHeader>
                            <CardBody>
                                {collection}
                            </CardBody>
                        </Card>
                    
                    </div>
                    
                </div>
            
            </div>
        );
    }
}

export default Exhibition;