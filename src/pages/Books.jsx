import React from 'react'
import CardImg1 from "../img/card__img-1.svg"
import CardImg2 from "../img/card__img-2.svg"
import CardImg3 from "../img/card__img-3.svg"

export default function Books() {
    const obj = [
        {
            id: 1,
            img: CardImg1,
            title: "Oson buyurtma qilish",
            text: "Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda buyurtma qila olasiz."
        },
        {
            id: 2,
            img: CardImg2,
            title: "Eng sara kitoblar",
            text: "Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil janrdagi kitoblarni topa olasiz."
        },
        {
            id: 3,
            img: CardImg3,
            title: "Tez yetkazib berish",
            text: "O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10 ish kuni ichida yetkazib beriladi."
        }
    ]
  return (
    <>
    <div className="books" id="books">

        <div className="container books__container">

            <span className="line books__line"></span>

            <h2 className="books__title">Nega aynan Akademnashr?</h2>

            <div className="card__wrap">
                
                {obj.map((item) => {
                    return (
                        <div className="card" key={item.id}>

                            <div className="card__img-box">
                            
                                <img src={item.img} alt={item.title} className="card__img"/>
                            
                            </div>

                            <div className="card__text-box">

                                <h3 className="card__title">{item.title}</h3>

                                <p className="card__text">{item.text}</p>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>

    </div>
    </>
  );
}
