import React from "react";

const MainNavBar = () => {
  
  return (
    <div className="nav__container">
      <div className="nav__top">
        Xavier
      </div>
      <div className="nav__middle">
          <a href="/" className="navLink">Home</a>
          <a href="/about" className="navLink">About</a>
          <a href="/work" className="navLink">Work</a>
          <a href="/contact" className="navLink">Contact</a>
      </div>
    <div className="nav__bottom">
      <a href="https://github.com/SandwichExpert" className="navLink">Github</a>
      <a href="https://linkedin.com/xaviercrespodev" className="navLink">Linkedin</a>
    </div>
    </div>
  );
};

export default MainNavBar;
