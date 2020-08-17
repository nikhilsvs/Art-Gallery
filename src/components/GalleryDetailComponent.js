import React, {Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Card,CardHeader,CardImg,CardImgOverlay,CardTitle,
CardBody,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../baseUrl';

function RenderItem({item}){
    return(
        <Card>
           
           <CardImg  src={baseUrl + item.image} width="100%" height="200px"/>
            
            <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
                <div className="row">
                    <div className="col-6">
                        <CardTitle>{item.name}</CardTitle>
                    </div>
                    <div className="col-6">
                        <Link to={`/paintings/${item._id}`} className="btn btn-outline
                                btn-success">Have a Look</Link>
                    </div>
                </div>
                
            </CardBody>
        </Card>
    );
}

class GalleryDetail extends Component{
    constructor(props){
        super(props);

    }

    render(){

        const collection = this.props.gallery.paintings.map((x)=>{
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
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    {
                        this.props.auth.isAuthenticated && this.props.gallery.user.username === this.props.auth.user.username
                        ?<BreadcrumbItem><Link to={`/user/${this.props.auth.user.username}`}>{this.props.auth.user.username}</Link></BreadcrumbItem>
                        :
                        <div></div>
                    }
                    
                     <BreadcrumbItem active >{this.props.gallery.name}</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardHeader>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>{this.props.gallery.name}</h2>
                                        <h5>BY - {this.props.gallery.user.username}</h5>
                                    </div>
                                    {
                                       this.props.auth.isAuthenticated && this.props.gallery.user.username === this.props.auth.user.username 
                                       ?
                                        <div className="col-md-6 text-center align-self-center">
                                            <Button className="btn-primary">
                                                Upload New Painting
                                            </Button>
                                        </div>
                                        :
                                        <div></div>
                                       
                                    }
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    {collection}
                </div>
            </div>
        );
    }
}

export default GalleryDetail;