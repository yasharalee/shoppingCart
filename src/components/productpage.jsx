
import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import  Cart  from "./cartinside";



const copyArr = [];
class Productpage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            cartArr: []
        };

       this.addToCartButton=this.addToCartButton.bind(this); 
       
    }

    addToCartButton (item) {
        copyArr.push(item);
        this.setState({cartArr: copyArr});
        console.log(this.state.cartArr);
        console.log(this.state.cartArr.length);
       
    }

    
    
render() { 
        
        const createCard = this.props.items.map(item =>{
            return(
             <div className="col-sm-3" key={item.id}>
                <Card >
                    <CardImg src={item.mainImage} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <button className="btn btn-primary" onClick={() => this.addToCartButton(item)}>Add to cart</button>
                    </CardBody>
                </Card>
            </div>
                )
        });
        return (
            <div>
                <div className="row">
                    {createCard}
                </div>
                <Cart statecart={this.state.cartArr} />
            </div>
        );
    }
}


 
export {copyArr};
export default Productpage;


