import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () =>{
  const[listOfRestaurants,setListOfRestaurants]=useState(resList);
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
        <button className="filter-btn" 
        onClick={()=>{
          const filteredList = listOfRestaurants.filter(
            (res)=>res.data.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}>
          Top Rated
        </button>
    </div>
    <div className="res-container">
      {listOfRestaurants.map((restaurant)=>(
        <RestaurentCard key={restaurant.data.id} resData={restaurant}/>
      ))}
    </div>
  </div>
  )
};

export default Body;