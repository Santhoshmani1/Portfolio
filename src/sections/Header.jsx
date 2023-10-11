// import { useState } from "react";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="title-container">
            <a href="#">
              {" "}
              <h1>Santhosh portfolio</h1>
            </a>
          </div>

          <div className="mode-controller">
            <button onClick={changeMode}>
              <span className="material-icons" id="mode-element">
                dark_mode
              </span>
            </button>
          </div>

          <button id="nav-btn" onClick={toggleNavbar}>
            <span className="material-icons" id="nav-btn-span">
              menu
            </span>
          </button>
        </div>

        <div className="links-container inactive">
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

function toggleNavbar() {
  const navContainer = document.querySelector(".links-container");
  navContainer.classList.toggle("active");

  const navBtnSpan = document.querySelector("#nav-btn-span");
  navContainer.classList.contains("active")
    ? (navBtnSpan.innerHTML = "close")
    : (navBtnSpan.innerHTML = "menu");
}

function changeMode() {
  const mode = document.querySelector("#mode-element");
  const html = document.querySelector("html");

  if (mode.innerHTML === "dark_mode") {
    mode.innerHTML = "light_mode";
    html.classList.add("dark");
  } else {
    mode.innerHTML = "dark_mode";
    html.classList.remove("dark");
  }
}
