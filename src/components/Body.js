import { restList } from "../Constants";
import { RestCart } from "./RestCard";
import { useState } from "react";

function filterData(search, searchIn){
    return searchIn.filter((res) => res.info.name.includes(search));
}

const Body = () => {
    const [restuarant, setRestuarant] = useState(restList);
    const [searchText, setSearchText] = useState();

    return (
        <>
         <div className="search-con">
            <input type="text" className="search-input" placeholder="search" value={searchText}
            onChange={(e) => setSearchText(e.target.value) }/>
            <button 
             onClick={() => {
                const data = filterData(searchText,restuarant);
                setRestuarant(data);
             }}
            >search</button>
         </div>
         <div className="restuarentList">
         {restuarant.map((res) => {
            return <RestCart {...res.info} key={res.info.id} />
         }
         )}
         </div>
      </>
    )
  }
  export default Body;