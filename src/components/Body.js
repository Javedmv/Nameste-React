import { restList } from "../Constants";
import { RestCart } from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";

function filterData(search, searchIn){
    return searchIn.filter((res) => res?.info?.name?.toLowerCase().includes(search.toLowerCase()));
}

const Body = () => {
    const [allRestuarant, setAllRestuarant] = useState([]);
    const [filteredRestuarant,setFilteredRestuarant] = useState([]);
    const [searchText, setSearchText] = useState();
    
    useEffect(() => {
      getRestaurants();
    },[]);

    async function getRestaurants() {
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        setAllRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
    if(!allRestuarant)return null;

    // if(filteredRestuarant?.length === 0)return <h1>Rest not found......</h1>

    return (allRestuarant?.length === 0)? <Shimmer/> : (
        <>
         <div className="search-con">
            <input type="text" className="search-input" placeholder="search" value={searchText}
            onChange={(e) => setSearchText(e.target.value) }/>
            <button 
             onClick={() => {
                const data = filterData(searchText,allRestuarant);
                setFilteredRestuarant(data);
             }}
            >search</button>
         </div>
         <div className="restuarent-list">
          {
            // this is were we write the logic for serach first time res not found.
          }
         {filteredRestuarant.map((res) => {
            return (
           <Link to={'/restaurant/'+res.info.id} key={res.info.id}>  <RestCart {...res.info}  /></Link>
         )}
         )}
         </div>
      </>
    )
  }
  export default Body;