import React , {Component} from 'react';
import {Card,CardBody,CardTitle,CardText,CardHeader,Button,
Form,FormGroup,Input,Label,Modal,ModalHeader,ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../baseUrl';

function RenderGalleries({items,auth}){
    const x = items.map((item)=>{
        return(
        <div className="col-md-5 m-2">
            <Link to={`/user/${auth.user.username}/${item.name}`}>
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


class User extends Component{
    constructor(props){
        super(props);

        this.state ={
            isModalOpen : false   
        }
        this.toggleModal = this.toggleModal.bind(this);
       
        this.handleGallerySubmit = this.handleGallerySubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handleGallerySubmit(event){

        this.toggleModal();        
        alert("Name : " + this.name.value);
        
        this.props.postGallery({name:this.name.value});

        event.preventDefault();
    }
  
    render(){
        return (
            <>
              <Card className="m-2">
                 <CardHeader>
                     <strong>
                        Hello !! {this.props.auth.user.username}
                    </strong>  
                </CardHeader>
                <CardBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-2">
                                <CardText>
                                    <strong>Name : </strong>
                                </CardText>
                            </div>
                            <div className="col-6 col-md-6">
                                        <CardText className="mr-auto">
                                            Nikhil Sharma
                                        </CardText>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        <CardText>
                                            <strong>Artist : </strong>
                                        </CardText>
                                        </div>
                                        <div className="col-4">
                                        <CardText className="mr-auto">
                                            No
                                        </CardText>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="contianer mt-10">
                                    
                                    <div className="row">
                                        <div className="col-10 offset-1 text-center align-self-center">
                                            <Card>
                                                <CardHeader>
                                                    <div className = "row">
                                                        <div className="col-md-8">
                                                            <CardTitle><strong>Your Galleries</strong></CardTitle>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <Button onClick={this.toggleModal}><span className="fa fa-plus success"/>Add Gallery</Button>
                                                        </div>
                                                    </div>
                                                   
                                        
                                                </CardHeader>
                                            </Card>
                                        </div>
                                    </div>
                                    <RenderGalleries items={this.props.galleries} auth={this.props.auth}/>
                                    
                                </div>
                                
                            </CardBody>
                        </Card>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                            <ModalHeader toggle={this.toggleModal}>
                                Add New Gallery
                            </ModalHeader>
                            <div className="container">
                            <ModalBody>
                                <Form onSubmit={this.handleGallerySubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="name">
                                            <strong>Name</strong>
                                        </Label>
                                        <Input type="text" name="name" id="name" placeholder="Name Of Your New Gallery"
                                            innerRef={(input)=> this.name = input}/>

                                    </FormGroup>
                    
                                    <FormGroup row>
                                        <button type="submit" value="submit" 
                                        onSubmit={this.handleGallerySubmit} className="btn loginbtn btn-lg btn-block">Submit</button>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            </div>
                            
                        </Modal>
                        </>
                   
        );
    }
}

export default User;