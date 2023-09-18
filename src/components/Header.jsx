import React from 'react'
import Logo from "../img/favicon.svg"

export default function Header() {
  return (
    <>
    <div className="filter"></div>
    <div className="mobile-slider">

        <div className="close-menu-wrap">

            <div className="mobile-slider-top">
                <div className="close-menu"></div>
                <div className="close-menu"></div>
            </div>

        </div>

        <ul className="mobile__list">
            <li className="mobile__item"><a href="#home" className="nav__link menu-active">Bosh sahifa</a></li>
            <li className="mobile__item"><a href="#books" className="nav__link">Kitoblar</a></li>
            <li className="mobile__item"><a href="#action" className="nav__link">Aksiyalar</a></li>
            <li className="mobile__item"><a href="#contact" className="nav__link">Kontaktlar</a></li>
        </ul>

    </div>

    <nav className="nav">

        <div className="nav__inner">

            <a className='nav__logo' href='/'>
                <img className="nav__img" src={Logo} alt="Akademnashr"/>
                <h2 className="logo__title">Akadem<span>nashr</span></h2>
            </a>

            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link active">Bosh sahifa</a></li>
                <li className="nav__item"><a href="#books" className="nav__link">Kitoblar</a></li>
                <li className="nav__item"><a href="#action" className="nav__link">Aksiyalar</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Kontaktlar</a></li>
            </ul>

            <a href="#contact" className="btn nav__btn">Ro’yxatdan o’tish</a>

            <div className="menu">
                <div className="burger"></div>
            </div>

        </div>

    </nav>
    </>
  );
}
