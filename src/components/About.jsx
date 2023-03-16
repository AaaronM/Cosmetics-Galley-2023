import "./About.scss";
import "./popup.scss";

import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// _____ICONS_____
import { SiArangodb } from "react-icons/si";
import { IoHeartHalf, IoGlobeOutline, IoStarOutline } from "react-icons/io5";
import { GiTransparentTubes } from "react-icons/gi";
import { MdNoDrinks } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiPlantLine } from "react-icons/ri";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function About() {
  return (
    <section className="section__about">
      <h1 className="section-about-h1">About us...</h1>
      <div className="about">
        {/* _________PopUps_______ */}

        <div className="reviews__about">
          {/* ______1_______ */}
          <div>
            <div className="icons__flex">
              <div className="reviews__about__1">
                <div className="icons">
                  <SiArangodb />
                </div>
                <p className="icons__text">Eco-friendly</p>

                <Popup
                  trigger={
                    <button className="btn">
                      {" "}
                      <HiOutlineMagnifyingGlass />{" "}
                    </button>
                  }
                  modal
                  nested
                  className="popup"
                  style={{
                    backgroundColor: "#e0e0e0",
                    TransitionEvent: "all .5s",
                  }}
                >
                  {(close) => (
                    <div className="modal">
                      <div className="content">
                        <h3 className="content__h3">
                          Being eco friendly means
                        </h3>
                        <p className="content__p">
                          living in a way that is not harmful to the
                          environment. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Voluptate eveniet magni iure a
                          adipisci laudantium ut reprehenderit alias atque
                          voluptatem tempora aliquid repudiandae quisquam
                          suscipit tenetur, quae quos officiis architecto. Lorem
                          ipsum dolor sit amet consectetur adipisicing elit.
                          Voluptatibus iusto veritatis quidem facilis. Ipsam
                          quasi, illum officia, et omnis ratione accusamus
                          laborum tenetur mollitia, aliquam qui. Eius tenetur
                          facere dolores?
                        </p>
                        <div className="content__plant">
                          <RiPlantLine />
                        </div>
                      </div>
                      <div>
                        <button
                          className="content__btn"
                          onClick={() => close()}
                        >
                          <AiOutlineCloseCircle />
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>

          {/* ______2_______ */}

          <div className="icons__flex">
            <div className="reviews__about__1">
              <div className="icons">
                <IoGlobeOutline />
              </div>
              <p className="icons__text">BIO</p>
              <Popup
                trigger={
                  <button className="btn">
                    {" "}
                    <HiOutlineMagnifyingGlass />{" "}
                  </button>
                }
                modal
                nested
                className="popup"
                style={{
                  backgroundColor: "#e0e0e0",
                  TransitionEvent: "all .5s",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3 className="content__h3">BIO Makeup</h3>
                      <p className="content__p">
                        living in a way that is not harmful to the environment.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate eveniet magni iure a adipisci laudantium ut
                        reprehenderit alias atque voluptatem tempora aliquid
                        repudiandae quisquam suscipit tenetur, quae quos
                        officiis architecto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus iusto
                        veritatis quidem facilis. Ipsam quasi, illum officia, et
                        omnis ratione accusamus laborum tenetur mollitia,
                        aliquam qui. Eius tenetur facere dolores?
                      </p>
                      <div className="content__plant">
                        <IoGlobeOutline />
                      </div>
                    </div>
                    <div>
                      <button className="content__btn" onClick={() => close()}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>

          {/* ______3_______ */}

          <div className="icons__flex">
            <div className="reviews__about__1">
              <div className="icons">
                <IoStarOutline />
              </div>
              <p className="icons__text">EU regulated</p>
              <Popup
                trigger={
                  <button className="btn">
                    {" "}
                    <HiOutlineMagnifyingGlass />{" "}
                  </button>
                }
                modal
                nested
                className="popup"
                style={{
                  backgroundColor: "#e0e0e0",
                  TransitionEvent: "all .5s",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3 className="content__h3">
                        Better EU regulation: guidelines and toolbox
                      </h3>
                      <p className="content__p">
                        living in a way that is not harmful to the environment.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate eveniet magni iure a adipisci laudantium ut
                        reprehenderit alias atque voluptatem tempora aliquid
                        repudiandae quisquam suscipit tenetur, quae quos
                        officiis architecto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus iusto
                        veritatis quidem facilis. Ipsam quasi, illum officia, et
                        omnis ratione accusamus laborum tenetur mollitia,
                        aliquam qui. Eius tenetur facere dolores?
                      </p>
                      <div className="content__plant">
                        <IoStarOutline />
                      </div>
                    </div>
                    <div>
                      <button className="content__btn" onClick={() => close()}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <div className=" card__invis__about">
          <div className="card"></div>
          <h3 className="text__h3">Our mission</h3>
          <div className="text">
            <p className="text__exp">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              a! Mollitia voluptate eos blanditiis doloremque illo asperiores
              rem! Ratione, alias sunt. Consequuntur iste repellendus magnam a
              dolorum corporis numquam tenetur!
            </p>
          </div>
          <div className=" card__item2__about"></div>
          <div className=" card__item1__about"></div>
          <div className=" card__item3__about  item3__text">
            Allure 2021 Best of Beauty Award Winner
          </div>
          <div className=" card__item4__about  item4__text">
            Featured in VOGUE
          </div>
          <div className=" card__item5__about  item5__text">
            <IoHeartHalf />
          </div>
          <div className=" card__item6__about "></div>

          <div className=" card__item7__about  item7__text">
            <IoStarOutline />
          </div>

          <div className=" card__item8__about "></div>
        </div>

        <div className="reviews__about">
          {/* ________4_________ */}
          <div className="icons__flex">
            <div className="reviews__about__1">
              <div className="icons">
                <MdNoDrinks />
              </div>
              <p className="icons__text">Alcohol free</p>
              <Popup
                trigger={
                  <button className="btn">
                    {" "}
                    <HiOutlineMagnifyingGlass />{" "}
                  </button>
                }
                modal
                nested
                className="popup"
                style={{
                  backgroundColor: "#e0e0e0",
                  TransitionEvent: "all .5s",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3 className="content__h3">Alcohol free</h3>
                      <p className="content__p">
                        living in a way that is not harmful to the environment.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate eveniet magni iure a adipisci laudantium ut
                        reprehenderit alias atque voluptatem tempora aliquid
                        repudiandae quisquam suscipit tenetur, quae quos
                        officiis architecto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus iusto
                        veritatis quidem facilis. Ipsam quasi, illum officia, et
                        omnis ratione accusamus laborum tenetur mollitia,
                        aliquam qui. Eius tenetur facere dolores?
                      </p>
                      <div className="content__plant">
                        <MdNoDrinks />
                      </div>
                    </div>
                    <div>
                      <button className="content__btn" onClick={() => close()}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>

          {/* ________5_________ */}
          <div className="icons__flex">
            <div className="reviews__about__1">
              <div className="icons">
                <GiTransparentTubes />
              </div>
              <p className="icons__text">Without Sulfates SLS & SLES</p>
              <Popup
                trigger={
                  <button className="btn">
                    {" "}
                    <HiOutlineMagnifyingGlass />{" "}
                  </button>
                }
                modal
                nested
                className="popup"
                style={{
                  backgroundColor: "#e0e0e0",
                  TransitionEvent: "all .5s",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3 className="content__h3">
                        Without Sulfates SLS & SLES
                      </h3>
                      <p className="content__p">
                        living in a way that is not harmful to the environment.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate eveniet magni iure a adipisci laudantium ut
                        reprehenderit alias atque voluptatem tempora aliquid
                        repudiandae quisquam suscipit tenetur, quae quos
                        officiis architecto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus iusto
                        veritatis quidem facilis. Ipsam quasi, illum officia, et
                        omnis ratione accusamus laborum tenetur mollitia,
                        aliquam qui. Eius tenetur facere dolores?
                      </p>
                      <div className="content__plant">
                        <GiTransparentTubes />
                      </div>
                    </div>
                    <div>
                      <button className="content__btn" onClick={() => close()}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>

          {/* ________6_________ */}
          <div className="icons__flex">
            <div className="reviews__about__1">
              <div className="icons">
                <IoHeartHalf />
              </div>
              <p className="icons__text">Vegan</p>
              <Popup
                trigger={
                  <button className="btn">
                    {" "}
                    <HiOutlineMagnifyingGlass />{" "}
                  </button>
                }
                modal
                nested
                className="popup"
                style={{
                  backgroundColor: "#e0e0e0",
                  TransitionEvent: "all .5s",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <h3 className="content__h3">
                        Rich In Antioxidants, Vitamins, And Nutrients.
                      </h3>
                      <p className="content__p">
                        living in a way that is not harmful to the environment.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate eveniet magni iure a adipisci laudantium ut
                        reprehenderit alias atque voluptatem tempora aliquid
                        repudiandae quisquam suscipit tenetur, quae quos
                        officiis architecto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptatibus iusto
                        veritatis quidem facilis. Ipsam quasi, illum officia, et
                        omnis ratione accusamus laborum tenetur mollitia,
                        aliquam qui. Eius tenetur facere dolores?
                      </p>
                      <div className="content__plant">
                        <IoHeartHalf />
                      </div>
                    </div>
                    <div>
                      <button className="content__btn" onClick={() => close()}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
