import React, { Component } from 'react';


// import minified CSS
import './Assets/css/default.min.css';


// import header component
import Header from './Components/headerComponent/header';



// components 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       </div>
    );
  }
}

export default App;
