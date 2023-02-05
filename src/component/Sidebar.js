import React from "react";
import { Link } from "react-router-dom";
import "./side.css" ;
function Sidebar(){
    return(
        <>
        <ul className="side">
            <li><Link className="btn btn-primary " style={{textDecoration:"none"}} to="/Products">get all products</Link></li>
            <li><Link className="btn btn-success" style={{textDecoration:"none"}} to="/products/category">get all categories</Link></li>
        </ul>
        </>
    )
}
export default Sidebar ;