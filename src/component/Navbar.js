import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar(){
    return(
        <>
              <nav className="navbar navbar-expand-lg bg-dark">
  <div className=" container container-fluid">
    <Link className="navbar-brand text-light" to="/Products">Logo</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link style={{textDecoration:"none",color:"black"}} className="nav-a text-light" aria-current="page" to="/Products">Home</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  




        </>

    )
}
export default Navbar ;