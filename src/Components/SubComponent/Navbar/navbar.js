import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css"
export default function Navbar() {
  const [mobileIcon,SetMobileIcon]=React.useState("fas fa-bars");
  function handleClick(){
    let navElems=document.getElementById("nav-elems");
    if(mobileIcon==="fas fa-bars"){
      SetMobileIcon("fas fa-close");
      navElems.style.left="0%";
    }
    else{
      SetMobileIcon("fas fa-bars");
      navElems.style.left="-200%";
    }
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "bold",
      color: isActive ? "black" : "white",
      backgroundColor: isActive ? "slateblue" : "transparent",
      borderRadius: isActive ? "5px" : "2px",
    };
  };
  return (
    <header>
            <nav>
                <div className="logo">
                    <h1 id="logo"><NavLink style={{color:"white"}} to="/">Portfolio</NavLink></h1>
                </div>
                <ul id="nav-elems">
                    <li><NavLink style={navLinkStyles} to="/"  onClick={()=>handleClick()}>Home</NavLink></li>
                    <li><NavLink style={navLinkStyles} to="/about" onClick={()=>handleClick()}>About</NavLink></li>
                    <li><NavLink style={navLinkStyles} to="/projects" onClick={()=>handleClick()}>Projects</NavLink></li>
                    <li>  <NavLink style={navLinkStyles} to="/skills" onClick={()=>handleClick()}>Skills</NavLink></li>
                    <li><NavLink style={navLinkStyles} to="/certifications" onClick={()=>handleClick()}>Certification</NavLink></li>
                    <li><NavLink style={navLinkStyles} to="/contact" onClick={()=>handleClick()}>Contact</NavLink></li>
                </ul>
                <i className={mobileIcon} id="mobile-icon" onClick={()=>handleClick()}></i>
            </nav>
        </header>    
  )
}