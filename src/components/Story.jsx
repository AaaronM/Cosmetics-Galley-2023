import "./Story.scss";

import React from "react";

function Story() {
  return (
    <section className="section__story">
      <h1 className="section-story-h1">Read from our customers...</h1>
      <div className="story">
        <div className="card__invis">
          <div className="card__story"></div>
          <div className="card__story__item1"></div>
          <div className="card__story__item2"></div>
          <div className="card__story__item3"></div>
          <div className="card__story__item4"></div>
          <div className="card__story__item5"></div>
          <div className="card__story__item6"></div>
        </div>

        {/* _________REVIEWS_______ */}
        <div className="flex__review">
          <div className="reviews">
            <div className="reviews__pic">
              <img
                src="https://images.unsplash.com/photo-1512679079471-44f18440f1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHNraW58ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                className="review__pic"
              />
              <p className="review__p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                optio ullam incidunt dicta suscipit qui provident ea deserunt ut
                obcaecati rerum, itaque excepturi, tempore assumenda totam magni
                sequi? Distinctio, nesciunt.
              </p>
            </div>
          </div>

          <div className="reviews">
            <div className="reviews__pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtmE0HU8-eGoyd2y8gouE0ciuR3i68zlEzQ&usqp=CAU"
                alt=""
                className="review__pic"
              />
              <p className="review__p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                optio ullam incidunt dicta suscipit qui provident ea deserunt ut
                obcaecati rerum, itaque excepturi, tempore assumenda totam magni
                sequi? Distinctio, nesciunt.
              </p>
            </div>
          </div>

          <div className="reviews">
            <div className="reviews__pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTtqcIJwe0_yVmgi2YrmfRbECArWV10Uj2sSPKT649IV7OGdGJzE9mmW8yq1WmvSqLOg&usqp=CAU"
                alt=""
                className="review__pic"
              />
              <p className="review__p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                optio ullam incidunt dicta suscipit qui provident ea deserunt ut
                obcaecati rerum, itaque excepturi, tempore assumenda totam magni
                sequi? Distinctio, nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
