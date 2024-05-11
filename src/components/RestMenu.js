import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const Menu = () => {
    const {id} = useParams();
    const [rest,setRest] = useState(null);

    useEffect(()=>{
        getRest();
    },[])
    async function getRest(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const json = await data.json();
        setRest(json?.data?.cards[2]?.card?.card?.info);
    }
    
    return !rest? (<Shimmer/>) : (
        <>
        <h1>restaurantId : {rest.id} </h1>
        <h2>restaurantName: {rest.name}</h2>
        <img src={IMG_CDN_URL + rest.cloudinaryImageId}/>
        <h3>{rest.areaName},{' '}{rest.city},{" "}{rest.avgRating} Stars</h3>
        <h3>Cost for Two:{" "}{rest.costForTwoMessage}</h3>
        </>
    )
}

export default Menu;