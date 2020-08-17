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
                                password:this.password.value});
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                   
                        <Form className="col-md-6 offset-md-3" onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor = "username">
                                    Username    
                                </Label>   
                                <Input type="text" name="username" id="username"
                                    placeholder="username"
                                    innerRef={(input) => this.username = input}/> 
                            </FormGroup>    
                            <FormGroup row>
                                <Label htmlFor = "firstname">
                                    Firstname   
                                </Label>   
                                <Input type="text" name="firstname" id="firstname"
                                    placeholder="firstname"
                                    innerRef={(input) => this.firstname = input}/> 
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "lastname">
                                    Lastname   
                                </Label>   
                                <Input type="text" name="lastname" id="lastname"
                                    placeholder="lastname"
                                    innerRef={(input) => this.lastname = input}/> 
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "password">
                                    Password   
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
        )
    }


}

export default Signup;