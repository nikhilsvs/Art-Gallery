import React , {Component} from 'react';
import {Media,Card,CardHeader,CardBody} from 'reactstrap'
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
            <div className="container">
                <RenderGalleries items={this.props.items} />
            </div>
        )
    }
}

export default Galleries;