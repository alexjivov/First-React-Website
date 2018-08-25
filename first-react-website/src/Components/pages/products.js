import React, { Component } from 'react';
// Removed CSS because it is already included in App.js

// components
// have to rename component in here and at export - must start with a capital
class Products extends Component {
  render() {
    return (
        // using bootstrap default container name
        <div className="container-fluid">
            <h1>
                Products
            </h1>

            <p>
            Buy our stuff!
            </p>
        </div>
    );
  }
}

export default Products;
