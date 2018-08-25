import React, { Component } from 'react';


// import minified CSS
import './Assets/css/default.min.css';

//////////////////
////COMPONENTS////
/////////////////

// import header component
import Header from './Components/headerComponent/header';

// import footer component
// import Footer from './Components/footerComponent/footer';

// import homepage component
import Homepage from './Components/pages/homepage';



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
          <Homepage />
    
       </div>

    );
  }
}

export default App;
