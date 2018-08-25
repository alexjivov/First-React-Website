import React, { Component } from 'react';
// Removed CSS because it is already included in App.js

// components
// have to rename component in here and at export - must start with a capital
class Header extends Component {
  render() {
    return (
     <header>
        <div className="logo">
        LOGO
        </div>

        <nav>
            <ul>
                <li className="first">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li className ="last">
                    <a href="#">Contact</a>
                </li>

            </ul>
        </nav>

    </header>
    );
  }
}

export default Header;
