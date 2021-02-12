import React, { Component } from 'react';
import Productpage from './productpage'

import ITEMS from '../shared/data'
import Navbar from './navbar'

class Main extends Component {
    state = { 
        items:ITEMS
     }
    render() { 
        return (
            <div>
                <Navbar/>
                <Productpage items={this.state.items}/>
            </div>
        );
    }
}
 
export default Main;