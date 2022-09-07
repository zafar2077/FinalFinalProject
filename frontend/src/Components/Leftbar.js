import React from "react";
import {
  FaRegUserCircle,
  FaHeart,
  FaWallet,
  FaRegArrowAltCircleRight,
  FaHeadphones,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

import { GiPc, GiVrHeadset, GiKeyboard, GiMouse } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./leftbar.css";
export default function Leftbar() {
  const [sidebarTrigger, setSidebarStrigger] = React.useState(true);

  const toggle = () => {
    sidebarTrigger ? setSidebarStrigger(false) : setSidebarStrigger(true);
  };

  return (
    <div className={sidebarTrigger ? "leftbar" : "extendedLeftbar"}>
      <Link to="/" className="links">
        {" "}
        <div className="logoContainer">
          {" "}
          <p className="logoText">Game Store</p>{" "}
          <img className="logoImage" src=".././logo.png"></img>
        </div>
      </Link>
      <div className="optionContainer">
        <FaRegUserCircle className="icon" />
        <Link className="links" to="/profile">
          {" "}
          <p className="leftBarText">Profile</p>
        </Link>
      </div>

      <div className="optionContainer">
        <FaHeart className="icon" />
        <Link to="/favorite" className="links">
          <p className="leftBarText">Favorite</p>
        </Link>
      </div>

      <div className="optionContainer">
        <FaWallet className="icon" />
        <Link to="/balance" className="links">
          <p className="leftBarText">Balance</p>
        </Link>
      </div>
      {sidebarTrigger ? (
        <div className="LowerOptionContainer" style={{ marginTop: "100px" }}>
          <p className="LowerLeftBarText" style={{ marginLeft: "0px" }}>
            Category
          </p>
          <FaRegArrowAltCircleDown
            className="icon"
            style={{ marginLeft: "auto", marginRight: "20px" }}
            onClick={toggle}
          />
        </div>
      ) : (
        <>
          <div className="LowerOptionContainer" style={{ marginTop: "100px" }}>
            <p className="LowerLeftBarText" style={{ marginLeft: "0px" }}>
              Category
            </p>
            <FaRegArrowAltCircleRight
              className="icon"
              style={{ marginLeft: "auto", marginRight: "20px" }}
              onClick={toggle}
            />
          </div>

          <div className="LowerOptionContainer">
            <GiPc className="icon" />
            <p className="LowerLeftBarText">Computer</p>
          </div>

          <div className="LowerOptionContainer">
            <FaHeadphones className="icon" />
            <p className="LowerLeftBarText">Gaming Headphones</p>
          </div>

          <div className="LowerOptionContainer">
            <GiVrHeadset className="icon" />
            <p className="LowerLeftBarText">VR Glasses</p>
          </div>

          <div className="LowerOptionContainer">
            <GiKeyboard className="icon" />
            <p className="LowerLeftBarText">Keyboard</p>
          </div>

          <div className="LowerOptionContainer">
            <GiMouse className="icon" />
            <p className="LowerLeftBarText">Mouse</p>
          </div>
        </>
      )}
    </div>
  );
}
