import React , {Component}  from 'react';
import {Breadcrumb,BreadcrumbItem,Card,CardImg,CardImgOverlay,CardTitle,
CardBody,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../baseUrl';

function RenderItem({item}){
    return(
        <Card>
            <CardImg  src={baseUrl + item.image}/>
                
            <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <div className="row">
                    <div className="col-6">
                        <CardTitle>{item.name}</CardTitle>
                    </div>
                    <div className="col-6">
                        <Link to={`/menu/${item._id}`} className="btn btn-outline
                                btn-success">Have a Look</Link>
                    </div>
                </div>
                
            </CardBody>
        </Card>
    );
}

class Exhibition extends Component{
    constructor(props){
        super(props);
    }

    

    render(){
        const collection = this.props.paintings.map((x)=>{
            return(
                <div className = "col-12 col-md-4 mb-1 mt-1">
                    <RenderItem item={x}/>
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
                    {collection}
                </div>
            
            </div>
        );
    }
}

export default Exhibition;