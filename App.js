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

const RestaurentCard = (props) =>{
  const {resName,cuisine,rating} = props;
  return(
    <div className="res-card">
        <img className="img"
         src="https://assets.cntraveller.in/photos/66aa0a01a5fa5da03ea872c4/4:3/w_4444,h_3333,c_limit/GettyImages-1460788301.jpg"/>
         <h3 className="name">{resName}</h3>
         <h4 className="cuisine">{cuisine}</h4>
         <h4 className="rating">{rating}</h4>
    </div>
  )
};

const Body = () =>{
  return(
  <div className="body">
    <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
        />
        <button className="search-btn">
          Search
        </button>
    </div>
    <div className="res-container">
      <RestaurentCard
      resName="Burger Kings"
      cuisine="Burger, Chiken"
      rating = "4.5🌟"
       />
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>

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