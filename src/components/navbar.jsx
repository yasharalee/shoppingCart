import { readFile } from 'fs';
import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                  <div className="container-fluid pl-5">
                    <a className="navbar-brand" href="#"><h2><i className="cart arrow down icon"></i></h2></a>
                  </div>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;