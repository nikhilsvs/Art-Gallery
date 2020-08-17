import React , {Component} from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText,Breadcrumb,BreadcrumbItem,
Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../baseUrl';

function RenderItem({x}){
    return(
        <Card>
            <CardImg  src={baseUrl + x.image}/>
            <CardBody>
                <CardTitle>{x.name}</CardTitle>
                <CardText>Author : {x.artist.username}</CardText>
                <CardText>Rating : {x.rating}</CardText>
                <CardText>Price : {x.price}</CardText>
                <CardText>{x.desc}</CardText>
            </CardBody>
        </Card>
    );
}

const ItemDetail = (props) => {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/paintings">Paintings</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.item.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    
                    <RenderItem x={props.item}/>
                  
                </div>
                <div className="col-4 m-1">
                    {
                        !props.auth.isAuthenticated
                        ?
                        <Button type="text" block danger>
                            Please Login to Buy this Painting
                        </Button>
                        
                        :
                        <Link to={`/menu/${props.item._id}/buy`} 
                        className="btn btn-outline btn-primary">BUY</Link>
                        

                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;