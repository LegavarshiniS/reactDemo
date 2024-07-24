// import logo from './logo.svg';
// import React from 'react'
//  import './App.css';
// import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

// import Logindem from './components/login';
// import Register from './components/register';
// import ResponsiveAppBar from './components/navbar';
// import Footer from './components/footer';
// import Home from './components/home';
// import BasicCard from './components/about';
// import Basic from './components/contact';
// import SimpleContainer from './components/mainpage';
//  const App = () => {
// return (
// <div className="app">
  
//   <Router>
           
      
             
//  <Routes>

//                  <Route exact path="/" element={ <Home/>}/>


//                     //<Route exact path="/login" element={ <Logindem/>} />
//                     <Route path="/register" element={ <Register/>} />
//                     <Route path="/register" element={ <Logindem/>} />
//                     <Route path="/about" element={ <BasicCard/>} />
//                     <Route path="/contact" element={ <Basic/>} />
//                     <Route path="/mainpage" element={ <SimpleContainer/>} />
//                      </Routes>

//             </Router> 
//          </div>
//     )
//    }
//  export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route,redirect } from 'react-router-dom';

import Register from './components/register';
import Logindem from './components/login';
import Home from './components/home';
import BasicCard from './components/about';
import Basic from './components/contact';
import SimpleContainer from './components/mainpage';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Logindem />} />
        <Route path="/about" element={<BasicCard />} />
        <Route path="/contact" element={<Basic />} />
        <Route path="/mainpage" element={<SimpleContainer />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
