import React, { Component } from 'react';
// Removed CSS because it is already included in App.js

// components
// have to rename component in here and at export - must start with a capital
class Homepage extends Component {
  render() {
    return (
        // using bootstrap default container name
        <div className="container-fluid">
            Home Page Content Here
        </div>
    );
  }
}

export default Homepage;
