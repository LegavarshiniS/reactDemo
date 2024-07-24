import React from "react";

import { Outlet } from "react-router-dom";

import Footer from "./footer";
import SimpleContainer from "./body";

import DrawerAppBar from "./navbar";
import MyComponent from "./img";
import SimplePaper from "./cards";
import DoublePaper from "./cards";
import CenteredContent from "./cards";
import MyComp from "./texxt";
import HomePage from "./texxt";

 const Home = () =>{
  return(
 <div style={{backgroundColor:'rgba(191, 187, 187, 0.5'}}>
    
      <DrawerAppBar/>
      <MyComponent/>
      <SimpleContainer/>
     
      <HomePage/>
      <CenteredContent/>
       <Footer/> 
      <Outlet/> 
      </div>
   );
 }
 export default Home;
