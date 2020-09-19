import React , {Component} from 'react';
import {Media,Card,CardHeader,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';

function RenderGalleries({items}){
    const x = items.map((item)=>{
        return(
        <div className="col-md-5 m-2">
            <Link to={`/galleries/${item.name}`}>
                <Card>
                    <CardBody>
                        <h4>{item.name}</h4>
                    </CardBody>
                </Card>
            </Link>
        </div>
        )
       
    });

    return(
        <div className="row offset-md-1 align-self-center">
                {x}
        </div>
    );
}

class Galleries extends Component{
    constructor(props){
        super(props);
    }

    render(){

       
        return(
            <>
            
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Galleries</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-md-9 offset-md-1 align-self-center text-center">
                        <Card className="GalleryHead">
                            <CardHeader><strong>Galleries</strong></CardHeader>
                        </Card>
                    </div>
                    
                    <RenderGalleries items={this.props.items} />
                </div>
                
            </div>
            </>
        )
    }
}

export default Galleries;