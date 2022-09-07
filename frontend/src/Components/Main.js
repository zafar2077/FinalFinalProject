import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HiOutlineSearch } from "react-icons/hi";
import React from "react";
import { Link } from "react-router-dom";
export default function Main() {
  const [currentButton, setCurrentButton] = React.useState();
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className="profileIconContainer">
          <Link to="/reglogin" className="links">
            {" "}
            <p className="topText">Register/Login</p>
          </Link>
          <Link to="/profile" className="links">
            <img src=".././profilePic.jpg" className="profileAvatar" />
          </Link>
        </div>
        <div className="searchFieldContainer">
          <span
            style={{
              position: "relative",
              padding: "0px 0px 0px 0px",
              margin: "0px 0px 0px 0px",
            }}
          >
            <HiOutlineSearch className="mainIcons" />
            <input className="searchInput" placeholder="Search" />
          </span>
        </div>
        <div className="carouselContainer">
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            dynamicHeight={true}
            width={700}
            autoPlay={true}
            interval={5000}
            centerSlidePercentage={90}
            autoFocus={true}
            ariaLabel={false}
            className="carousel"
          >
            <div>
              <img className="carouselImage" src=".././keyboard.jpg" />
            </div>

            <div>
              <img className="carouselImage" src=".././vr.jpg" />
            </div>

            <div>
              <img className="carouselImage" src=".././setup.webp" />
            </div>
          </Carousel>
        </div>
        <p className="productText">Product</p>
        <div className="productBarContainer">
          <button
            className={
              currentButton === "Top"
                ? "selectedProductButtons"
                : "productButtons"
            }
            style={{ marginLeft: "0px" }}
            onClick={() => {
              setCurrentButton("Top");
            }}
          >
            Top
          </button>
          <button
            className={
              currentButton === "Popular"
                ? "selectedProductButtons"
                : "productButtons"
            }
            onClick={() => {
              setCurrentButton("Popular");
            }}
          >
            Popular
          </button>
          <button
            className={
              currentButton === "Recommended"
                ? "selectedProductButtons"
                : "productButtons"
            }
            onClick={() => {
              setCurrentButton("Recommended");
            }}
          >
            Recommended
          </button>
        </div>
      </div>
    </div>
  );
}
