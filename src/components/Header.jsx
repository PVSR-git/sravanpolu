import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Header(){
    return(
     
        
               <nav>
             
        <NavLink to="/" className={({isActive})=>isActive? "active-link" : null}
        >Home</NavLink>
         <NavLink to="/photos"
        className={({isActive})=>isActive? "active-link" : null}
        >Photos</NavLink>
       {/* <NavLink to="/vans"
        className={({isActive})=>isActive? "active-link" : null}>Vans</NavLink> */}
        </nav>
        
    )
}