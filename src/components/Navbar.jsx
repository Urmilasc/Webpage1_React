import React, { useState } from "react";
import "../App.css";


export const Navbar = () => {


  return (
    <>
      <div className="nav container active">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo"></img>
        </div>
        <div className="navbar ">
        <ul className="navbar-list">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="navbar-list">Login</button>
        </div>
        <div className="mobile-navbar-btn">
          <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
        </div>
      </div>
      
    </>
  );
};
