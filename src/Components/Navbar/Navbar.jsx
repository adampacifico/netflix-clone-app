import React, { useState, useEffect } from "react";

import logo from "../../logo.png";
import img from "../../imgAvatar.png";

import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img className="logo" src={logo} alt="" />

      <img className="avatar" src={img} alt="" />
    </div>
  );
};

export default Navbar;
