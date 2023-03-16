import React from 'react'
import "./home.scss"
import pic1 from "../img/pic_1.png"



function Home() {
  return (
    <div>
        <section className="home">
            <div className="home__pic">
              <img src={pic1} alt="pic 1" />
            </div>
            <div className="container">
              <h1 className="home__h1">
                Find Your Color
              </h1>
              <p className="home__p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus tenetur sit temporibus alias ad, velit in laboriosam ut expedita, qui impedit unde consequuntur perferendis, ex aut iure vero nam?</p>
            </div>
        </section>
    </div>
  )
}

export default Home