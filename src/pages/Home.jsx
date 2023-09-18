import React from "react";
import Img from "../img/python-book.png";

export default function Home() {
  return (
    <>
      <div className="hero" id="home">
        <div className="container hero__container">
          <div className="hero__text-box">
            <span className="line hero__line"></span>

            <h2 className="hero__title">Pythonda dasturlash asoslari</h2>

            <p className="hero__text">Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammalqo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslaryozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tishmumkin.</p>

            <a href="#contact" className="btn">Buyurtma berish</a>
          </div>

          <div className="hero__img-box">
            <img className="hero__img" src={Img} alt="Python Book"/>
          </div>
        </div>
      </div>
    </>
  );
}
