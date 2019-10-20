import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const MainNavBar = () => {
  const [isSelected, setIsSelected]=useState("");

  function handleClick(e){
    e.preventDefault()
    const key = e.target.key;
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.key, 'aHEYYYYYYYYYYYYYYYYYYYYYYYYY')
    setIsSelected(key);
    console.log(isSelected)
    if(key==e.target.key){
      return (<i className={key} style={{fontSize:"1.5em"}}></i>)
    }

  }

  return (
    <div className="nav__container">
      <div className="nav__top">Xavier</div>
      <div className="nav__middle">
        
        <NavLink to="/" className="navLink" key="1" >
          <i className="fas fa-home" key="1" style={{fontSize:"1.5em"}}></i>
        </NavLink>
        
       
        <NavLink to="/about" className="navLink" key="2">
        {isSelected === "2" ? "About":(<i className="fas fa-user" style={{fontSize:"1.5em"}}></i>)}
        </NavLink>
        <NavLink to="/work" className="navLink" key="3">
        {isSelected === "2" ? "Projects":(<i className="fas fa-briefcase" style={{fontSize:"1.5em"}}></i>)}
        </NavLink>
        <NavLink to="/contact" className="navLink" key="4">
        {isSelected === "2" ? "Contact":(<i className="fas fa-envelope" style={{fontSize:"1.5em"}}></i>)}
        </NavLink>
      </div>
      <div className="nav__bottom">
        <a href="https://github.com/SandwichExpert" style={{fontSize:"1.5em"}} className="navLink">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/xaviercrespodev" className="navLink">
        <i className="fab fa-linkedin" style={{fontSize:"1.5em"}}></i>
        </a>
      </div>
    </div>
  );
};

export default MainNavBar;
