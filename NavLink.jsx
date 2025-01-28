// How to use NavLink component of 'react-router-dom' package:

import React from "react";
import { NavLink } from "react-router-dom"; //importing the component
function Navbar(){
    function navStyles({isActive}){ //isActive is a propety inside the component NavLink, so we are destructuring it here..
        return{  //keep in mind, whenever we are performing css using JavaScript then we use {} not () with return phase..
            textDecoration: isActive? 'none': 'underline',  // with the help of ternary operator, i am specifying the css!
            fontWeight: isActive? 'bold': 'normal',   // by default the value of isActive is true
            color: isActive? 'green': 'white'
        }
    }

    return(
    <div className="nav">
       <NavLink style={navStyles} to='/home'>Home</NavLink> // I am implementing the navStyles function here..
       <NavLink style={navStyles} to='/about'>About</NavLink>
    </div>
    )
}
export default Navbar;

// Note: 
//isActive flag with boolean value, will work whenever you click the tabs..
// When we use NavLink, we will receive a default className with value 'active'..
//this className value is not static, it gets change whenever we route to tabs, the new tab will get the className and the same will get removed from former tab.
