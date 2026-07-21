import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
        } = resData?.data;

  return(
    <div className="res-card">
        <img className="img"
        src={ CDN_URL + cloudinaryImageId
        }
        />
         <h3 className="res-info">{name}</h3>
         <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <div className="details">
         <h4 className="rating"><span className="rating-value">{avgRating}</span><span className="label">Rating</span></h4>
         <h4 className="cost"><span className="cost-value">₹{costForTwo/100}</span><span className="label">FOR TWO</span></h4>
         <h4 className="delivery-time"><span className="delivery-value">₹{deliveryTime}</span><span className="label">min</span></h4>
        </div>
    </div>
  )
};

export default RestaurentCard;