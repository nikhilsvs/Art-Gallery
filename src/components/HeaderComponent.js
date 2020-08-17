import React , {Component} from 'react';
import {NavItem,Navbar,NavbarBrand,NavbarToggler, Nav,Jumbotron,
        Collapse,Button,Modal,ModalBody,ModalHeader,Form,Input,Label,
        FormGroup} from 'reactstrap';
import {Link,NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogout() {
        this.props.logoutUser();

    }
    handleLogin(event)
    {
        this.toggleModal();
        alert("Username : " + this.username.value + 
                "\nPassword : " + this.password.value);
        this.props.loginUser({username:this.username.value,
                              password:this.password.value});
        event.preventDefault();
    }
    render()
    {
        return(
            <>
            <Navbar dark expand="sm" className="fixed-top navbar-dark">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand href="/">ArtGallery</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    Exhibition
                                </NavLink>
                            </NavItem>
                             <NavItem>
                                <NavLink className="nav-link" to="/galleries">
                                    Galleries
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/paintings">
                                    Paintings
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                {!this.props.auth.isAuthenticated ? 

                                    <div>
                                        <Button onClick={this.toggleModal}>
                                        Login
                                        </Button>
                                        <Link className="btn btn-primary ml-2" to="/signup">
                                            SignUp
                                        </Link>
                                    </div>
                                    
                               
                                    :
                                    <div>
                                        <div className="navbar-text mr-3">
                                            <NavItem nav>
                                                <NavLink to={`/user/${this.props.auth.user.username}`} 
                                                className="nav-link">
                                                    {this.props.auth.user.username}
                                                </NavLink>
                                            </NavItem>
                                            
                                            
                                        </div>
                                        <Button onClick={this.handleLogout} outline >
                                            Logout
                                        </Button>
                                    </div>
                                    
                                }
                            </NavItem>

                        </Nav>
                    </Collapse>
                    
                </div>
            </Navbar>
            <Modal className="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup row>
                        <Label className="col-2" htmlFor="username"><strong>Username</strong></Label>
                        <div className="col-md-12">
                            <Input type="text" name="username" id="username"
                                placeholder="Username" innerRef={(input)=>this.username=input}/>
                        </div>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col-2" htmlFor="password"><strong>Password</strong></Label>
                            <div className="col-md-12">
                            <Input type="password" name="password" id="password"
                                placeholder="Password" innerRef={(input)=>this.password=input}/>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <div className="col-12">
                                <button type="submit" value="submit" 
                                onSubmit={this.handleLoginSubmit} className="btn loginbtn btn-lg btn-block">Submit</button>
                            </div>
                        </FormGroup>
                    </Form>        
                      
                </ModalBody>
            </Modal>
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h3>Welcome To Your Online Painting Exhibition</h3>
                            <h4>Just have a tour and Take part in Auction</h4>
                        </div>
                        <div className="col-4">
                            <Link className="btn btn-outline btn-secondary" to="/menu">OnGoing Exhibition</Link>
                        </div>

                    </div>
                </div>

                
            </Jumbotron>
            </>
        );
    }
}

export default Header;