import React , {Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Card,CardHeader,CardImg,CardImgOverlay,CardTitle,
    CardBody,Form,Button,FormGroup,Input,Label,Modal,ModalHeader,ModalBody} from 'reactstrap';
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

class ExhibitionDetail extends Component{
    constructor(props){

        super(props);

    }

    render()
    {
      //  const collection = this.props.exhibition.Paintings.map((x)=>{
       //     return(
       //         <div className = "col-12 col-md-4 mb-1 mt-1">
       //             <RenderItem item={x}/>
       //         </div>
       //     )
       // })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardHeader>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2>{this.props.exhibition.name}</h2>
                                        <h5>Date - {this.props.exhibition.Date}</h5>
                                    </div>
                                    
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
              
            </div>
            
        )
    }
}

export default ExhibitionDetail;