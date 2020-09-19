import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
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

class GalleryDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false,
            uploadImage:null
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handleUpload(event)
    {
        alert("You have Selected : "+ event.target.files[0].name);
        this.setState({
            uploadImage : 'images/' + event.target.files[0].name
        })
        var formData = new FormData();
        formData.append('imageFile',event.target.files[0]);
        fetch(baseUrl + 'imageupload',{
            method:'POST',
            headers:{
                'Origin':'http://localhost:3000',
                'Authorization':'Bearer ' + this.props.auth.token
            },
            credentials: "same-origin",
            body:formData
        })
        .then((response)=>response.json())
        .then((data)=>{
            alert("Your File has Been Uploaded" + 
                 "\n" + 
                 data)
        })
        .catch((error)=>console.log(error))
        event.preventDefault();
    }
    handleSubmit(event){
        this.toggleModal();

        alert("name :" + this.name.value + 
                "Image : " + this.state.uploadImage +
                this.name.value + this.state.uploadImage +
                this.desc.value+ this.rating.value+
                                this.price.value+
                "\n GalleryId :" + this.props.gallery._id);
        event.preventDefault();                    
        this.props.postPainting({name:this.name.value , image:this.state.uploadImage,
                               desc:this.desc.value,rating:this.rating.value,
                                price:this.price.value},this.props.gallery._id);
    
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
            <>
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/user">Home</Link></BreadcrumbItem>
                    {
                        this.props.auth.isAuthenticated && this.props.gallery.user.username === this.props.auth.user.username
                        ?<BreadcrumbItem><Link to={`/user/${this.props.auth.user.username}`}>{this.props.auth.user.username}</Link></BreadcrumbItem>
                        :
                        <BreadcrumbItem><Link to="/galleries">Galleries</Link></BreadcrumbItem>
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
                                            <Button className="btn-primary" onClick={this.toggleModal}>
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                            <ModalHeader toggle={this.toggleModal}>
                                Add New Gallery
                            </ModalHeader>
                            <div className="container">
                            <ModalBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="name">
                                            <strong>Name</strong>
                                        </Label>
                                        <Input type="text" name="name" id="name" placeholder="Name Of Your New Gallery"
                                            innerRef={(input)=> this.name = input}/>

                                    </FormGroup>
                    
                                    <FormGroup row>
                                        <Label htmlFor="rating">
                                            <strong>Rating</strong>
                                        </Label>
                                        <Input type="number" name="rating" id="rating" placeholder="Enter Your painting Rating"
                                            innerRef={(input)=> this.rating = input}/>

                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="price">
                                            <strong>Price</strong>
                                        </Label>
                                        <Input type="number" name="price" id="price" placeholder="Price"
                                            innerRef={(input)=> this.price = input}/>

                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="imageFile">Upload Your Painting</Label>
                                        <Input type="file" name="imageFile" id="imageFile"
                                        onChange={this.handleUpload}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="desc">
                                            <strong>Description</strong>
                                        </Label>
                                        <Input type="textarea" name="desc" id="desc" placeholder="Price"
                                            innerRef={(input)=> this.desc = input}/>

                                    </FormGroup>
                                    <FormGroup row>
                                       <Button type="submit" value="submit" className="btn-block btn-dark bg-block">
                                           Submit
                                       </Button>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            </div>
                            
                        </Modal>
            </>
        );
    }
}

export default GalleryDetail;