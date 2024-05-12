import React from "react";
import "./SubHeader.css";
import stars from "../../../Assets/svg.star.svg";
import dot_star from "../../../Assets/3dot star.svg";
import bba from "../../../Assets/bba.svg";

const SubHeader = () => {
  return (
    <div className="subHeader-container container">
      <div className="subheader-contents">
        <div className="subheader-content">
          <img src={dot_star} alt="" />
          <h4>ACCREDITED BUSINESS</h4>
        </div>
        <div className="subheader-content d-none d-lg-flex">
          <div className="rated-stars" style={{ color: "black" }}>
            <h4>
              Rated <b>4.7 </b>
              <img src={stars} alt="stars" />
              based on <b>7K+</b> happy traveler reviews!
            </h4>
          </div>
        </div>
        <div className="subheader-content">
          <img src={bba} alt="" />
          <h4>100+ EXCLUSIVE DEALS</h4>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
