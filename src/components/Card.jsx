import React from 'react'
import "./Card.scss"
import pic_1 from "../img/pic_1.png"
import pic_2 from "../img/pic_2.png"
import pic_3 from "../img/pic_3.png"
import pic_5 from "../img/pic_5.png"
import pic_7 from "../img/pic_7.png"

export default function Card() {

    const characters = [
  
        {
          id: 1,
          pic:pic_1
        },
        {
          id: 2,
          pic:pic_2
        },
        {
          id: 3,
          pic:pic_3
        },
        {
          id: 4,
          pic:pic_5
        },
    
        {
        id: 5,
        pic:pic_7
          },    
      ];

     


      const CardListItem = props => {
        return (
          <div>
            <div
                  style= {{backgroundImage: `url(${props.character.pic})`, width: "300px",
                  height: "300px", objectFit: "cover", backgroundSize:"cover", }}>
            </div>
          </div>
        );
      };

      
      const CardList = () => {
        return (
          <div>
            {characters.map(character => {
              return <CardListItem character={character} key={character.id} />;
            })}
          </div>
        );
      };
      
  return (
    <div className='card__container'>
        <CardList  />
    </div>
  )
}
