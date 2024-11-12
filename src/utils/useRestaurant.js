import { useState,useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant,setRestuarant] = useState(null)
    
    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const json = await data.json();
        setRestuarant(json?.data?.cards[2]?.card?.card?.info);
    }

    return restaurant;
}
export default useRestaurant;