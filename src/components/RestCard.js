import { IMG_CDN_URL } from "../Constants";

export const RestCart = ({name,cloudinaryImageId,cuisines,avgRating,id}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL +cloudinaryImageId} alt="food" ></img>
        <h2>{name}, {id}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars,</h4>
      </div>
    )
  }