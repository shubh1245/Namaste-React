import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
  return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://ridershop.foodpanda.my/cdn/shop/files/foodpanda_logo-RGB_horizontal_1046x.jpg?v=1679368483" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
};

const RestaurentCard = () =>{
  return(
  <div className="image">
    <img className="" src=""/>
  </div>
  
  )
};

const Body = () =>{
  return(
  <div className="body">
    <div className="search">
      Search
    </div>
    <div className="res-container">

    </div>
  </div>
  )
};

const AppLayout = () =>{
  return <div className="app">
    <Header/>
    <Body/>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);