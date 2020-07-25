import React , {Component} from 'react';
import {Form,Input,FormGroup,Label,Button} from 'reactstrap';

class Buy extends Component {
    constructor(props){
        super(props);

        this.handleBuy = this.handleBuy.bind(this);
    }
    handleBuy(event){
        alert("FirstName : " + this.firstname.value+
              "\nLastName : " + this.lastname.value+
              "\nTelnum : " + this.telnum.value+
              "\nEmail : " + this.email.value+
              "\nAgree : " + this.agree.checked+
              "\nContact-Type : " + this.contacttype.value+
              "\nAddress : " + this.address.value+
              "\nPayment-Type : " + this.paytype.value);
        event.preventDefault();
    }
    render()
    {

        return(
            <div className="container">
                <div className="row">
                    <Form onSubmit = {this.handleBuy} className="col-8 offset-2">
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <div className="col-10">
                                <Input className="form-control" type="text"
                                 id="firstname" name="firstname" placeholder="FirstName"
                                 innerRef={(input)=>this.firstname=input}/>
                            </div>      
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <div className="col-10">
                                <Input className="form-control" type="text"
                                 id="lastname" name="lastname" placeholder="LastName"
                                 innerRef={(input)=>this.lastname=input}/>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                            <div className="col-10">
                                <Input className="form-control" type="text"
                                 id="telnum" name="telnum" placeholder="Telnum"
                                 innerRef={(input)=>this.telnum=input}/>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <div className="col-10">
                                <Input className="form-control" type="text"
                                 id="email" name="email" placeholder="Email"
                                 innerRef={(input)=>this.email=input}/>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <div className="col-6 offset-2">
                                <div className="form-check">
                                    <Label check>
                                        <Input type="checkbox" name="agree" id="agree" className="form-check-input"
                                        innerRef={(input)=>this.agree=input}/>
                                        {' '}
                                        <strong>Can we Contact You</strong>
                                    </Label>
                                </div>
                                
                            </div>
                            <div className="col-3 offset-1">
                                <Input type="select" name="contacttype" id="contacttype"
                                innerRef={(input)=>this.contacttype=input}>
                                    <option>Tel</option>
                                    <option>Email</option>
                                </Input>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="address" md={2}>Address</Label>
                            <div className="col-10">
                                <Input className="form-control" type="textarea"
                                 id="address" name="address" 
                                 placeholder="Your Delivery Address"
                                 innerRef={(input)=>this.address=input}/>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="paytype" md={2}>Payment Type</Label>
                            <div className="col-10">
                                <Input className="form-control" type="select"
                                 id="paytype" name="paytype" innerRef={(input)=>this.paytype=input}>
                                     <option>
                                         Cash OnDelivery
                                     </option>
                                     <option>
                                         Online Net Banking
                                     </option>
                                     <option>
                                         Paytm
                                     </option>
                                 </Input>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <div className="col-10 offset-2">
                                <Button type="submit" value="submit" className="btn btn-block bg-primary">Proceed</Button>
                            </div>
                        </FormGroup>
                        
                    </Form>
                </div>
            </div>
        );
        
        
    }
}

export default Buy;