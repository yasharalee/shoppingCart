import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';




class Cart extends Component {
    constructor(props){
        super(props);
        this.state = { 
            itemsInCartArr:[]
           
         }
        
    }
    
    
    
    
    render() { 
        
        const cartItemCard = this.props.statecart.map(cartitem => {
            return(
             <div className="col-sm-3" key={cartitem.index}>
                <Card >
                    <CardImg src={cartitem.mainImage} alt={cartitem.name}/>
                    <CardBody>
                        <CardTitle>{cartitem.name}</CardTitle>
                    </CardBody>
                </Card>
             </div>
            )
        })
        
        return (
            <div className="container">
                <div className="row">
                {cartItemCard}
                </div>
            </div>
        );
    }
}
 
export default Cart;