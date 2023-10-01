// import { useState } from "react";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="title-container">
          <h1 style={{ userSelect: "none" }}>Santhosh portfolio</h1>
        </div>

        <button id="nav-btn" onClick={toggleNavbar}>
        <span className="material-icons" id="nav-btn-span">menu</span>
        </button>

        <div className="links-container inactive">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};


function toggleNavbar(){
  const navContainer = document.querySelector('.links-container');
  navContainer.classList.toggle('active');

  const navBtnSpan = document.querySelector('#nav-btn-span');
  (navContainer.classList.contains('active'))? (navBtnSpan.innerHTML = "close") : (navBtnSpan.innerHTML = "menu");
}