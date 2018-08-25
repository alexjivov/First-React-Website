import React, { Component } from 'react';

// REACT ROUTER - Allows navigation of different webpages - npm react-router-dom
import {
  BrowserRouter as Router,
  Route, 
  Link
  
} from 'react-router-dom';

// import minified CSS
import './Assets/css/default.min.css';

//////////////////
////COMPONENTS////
/////////////////

// import header component
import Header from './Components/headerComponent/header';

// import footer component
// import Footer from './Components/footerComponent/footer';

// import pages components
import Homepage from './Components/pages/homepage';
import Products from'./Components/pages/products'; 




class App extends Component {
  render() {
    return (
      //implement router for pages to render on different page screens
      //putting just the page components in here will make them all render at once
      <Router>
      <div className="App">
        <Header />
      
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Products' component={Products} />


      
       </div>
      </Router>
    );
  }
}

export default App;
