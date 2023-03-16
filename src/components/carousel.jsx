import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.scss";
import Card from "./Card";
import pic_1 from "../img/pic_1.png";
import pic_2 from "../img/pic_2.png";
import pic_3 from "../img/pic_3.png";
import pic_5 from "../img/pic_5.png";
import pic_7 from "../img/pic_7.png";

function BrandCarousel(...props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const characters = [
    {
      id: 1,
      pic: pic_1,
      text: "HI",
    },
    {
      id: 2,
      pic: pic_2,
      text: "HIIIII",
    },
    {
      id: 3,
      pic: pic_3,
      text: "BYEEE",
    },
    {
      id: 4,
      pic: pic_5,
      text: "POP",
    },

    {
      id: 5,
      pic: pic_7,
      text: "Bitch",
    },
  ];

  return (
    <section>
      <h1 className="section-2-h1">Some of the brands at our store...</h1>
      <Carousel className="section__carouse" responsive={responsive}>
        {characters.map((character) => {
          return (
            <div>
              <div>
                <div
                  className="card__container"
                  style={{
                    backgroundImage: `url(${character.pic})`,
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    backgroundSize: "cover",
                    borderRadius: "40px",
                    marginLeft: "5rem",
                  }}
                ></div>
                <p
                  style={{
                    color: "gray",
                    fontSize: "4rem",
                    margin: "3rem",
                    marginLeft: "15rem",
                  }}
                >
                  {character.text}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default BrandCarousel;
