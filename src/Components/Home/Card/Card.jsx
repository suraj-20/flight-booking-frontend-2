import React from "react";
import "./Card.css";
import image1 from "../../../Assets/card-1.gif";
import image2 from "../../../Assets/card-2.gif";
import image3 from "../../../Assets/card-3.gif";
import { Link } from "react-router-dom";

const cardObj = [
  {
    id: 1,
    card_image: image1,
  },
  {
    id: 2,
    card_image: image2,
  },
  {
    id: 3,
    card_image: image3,
  },
];

const Card = () => {
  return (
    <>
      <div className="card-container card d-grid">
        {cardObj.map((card) => {
          return (
            <Link key={card.id} to={"/"}>
              <div className="card-image d-flex">
                <img src={card.card_image} alt="" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;
