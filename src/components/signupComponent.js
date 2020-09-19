import React ,{ Component} from 'react';
import {Form,Input,Label,Button,Card,FormGroup} from 'reactstrap';


class Signup extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert("Username :" +  this.username.value +
                "\nPassword : " + this.password.value);
        this.props.signupUser({username:this.username.value,
                                password:this.password.value,
                                firstname:this.firstname.value,
                                lastname:this.lastname.value});
        event.preventDefault();
    }

    render(){
        return(
            <div className="container signUpComponent">
                <div className="row">
                   <div className="col-sm-6 text-center align-self-center singupleft">
                       <div className="signUpOverlay text-center align-self-center">
                            <h1>Welcome to ArtGallery</h1>
                            <h2>Please Provide Essential Details for signUp</h2>
                       </div>
                        
                   </div>
                   <div className="col-sm-6 text-center align-self-center">
                   <Form className="col-md-6 offset-md-3" onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor = "username">
                                    <strong>Username </strong>    
                                </Label>   
                                <Input type="text" name="username" id="username"
                                    placeholder="username"
                                    innerRef={(input) => this.username = input}/> 
                            </FormGroup>    
                            <FormGroup row>
                                <Label htmlFor = "firstname">
                                    <strong>Firstname</strong>
                                       
                                </Label>   
                                <Input type="text" name="firstname" id="firstname"
                                    placeholder="firstname"
                                    innerRef={(input) => this.firstname = input}/> 
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "lastname">
                                    <strong>Lastname</strong>
                                       
                                </Label>   
                                <Input type="text" name="lastname" id="lastname"
                                    placeholder="lastname"
                                    innerRef={(input) => this.lastname = input}/> 
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "password">
                                    <strong>Password</strong>
                                       
                                </Label>   
                                <Input type="password" name="password" id="password"
                                    placeholder="password"
                                    innerRef={(input) => this.password = input}/> 
                            </FormGroup>
                            <FormGroup row>  
                                <Button type="submit" className="btn btn-block bg-dark">
                                    Submit
                                </Button> 
                            </FormGroup>
                        </Form> 
                   </div>
                    
                </div>
            </div>
        )
    }


}

export default Signup;