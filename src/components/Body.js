import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
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
      {resList.map((restaurant)=>(
        <RestaurentCard key={restaurant.data.id} resData={restaurant}/>
      ))}
    </div>
  </div>
  )
};

export default Body;