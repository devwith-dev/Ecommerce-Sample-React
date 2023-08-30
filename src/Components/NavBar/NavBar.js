import React from "react";
import logo from "../Images/logo1-free-img.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import "./NavBar.css";

export const NavBar = () => {
  return (
      <nav>
        <div className="left-nav">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
          <ul>
            <li>
              <Link to="/store">EVERYTHING</Link>
            </li>
            <li>
              <Link to="/women">WOMEN</Link>
            </li>
            <li>
              <Link to="/men">MEN</Link>
            </li>
            <li>
              <Link to="/jewelery">JEWELERY</Link>
            </li>
            <li>
              <Link to="/electronics">ELECTRONICS</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/about">CONTACT US</Link>
            </li>
          </ul>
          <div className="icons">
            <span>$0.00</span>
            <FaShoppingCart />
            <BsFillPersonFill />
          </div>
        </div>
      </nav>
  );
};
