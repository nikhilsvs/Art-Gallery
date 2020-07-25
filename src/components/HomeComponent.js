import React , {Component} from 'react';
import {UncontrolledCarousel, Breadcrumb,BreadcrumbItem} from 'reactstrap';

class Home extends Component{
    constructor(props){
        super(props);

    }

    render()
    {
        const items =  [
            {
                src:'assets/images/Carousel1.jpg',
                caption:'Welcome to Your Online Painting World !!',
                header:'ArtGallery ',
                key:1
            },
            {
                src:'assets/images/Carousel2.jpg',
                caption:'Here You Can Buy Your Painting',
                header:'Free Home Delivery',
                key:2
            },
            {
                src:'assets/images/Carousel3.jpg',
                caption:'Be An Artist , And send Your Art for Exhibition',
                key:3
            }
        ]

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active >Home</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <UncontrolledCarousel items={items}/>
                    </div>
                </div>
            </div>
            
        );
    }
}


export default Home;