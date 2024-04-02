import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css"

const NavBar = () => {
    return (
        <div className="header">
          <div className="logo">Logo</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="user-icon">User</div>
        </div>
      );
};

// const heading1 = React.createElement("h2",{id:"inner",key:"h2"},"Nameste Everyone");
const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(heading);
// const container = React.createElement("div",{id:"container"},<NavBar />)
root.render(<NavBar />)

