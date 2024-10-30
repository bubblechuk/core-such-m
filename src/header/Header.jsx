import "./Header.css"
import Burger from './burger.svg'
import {useState} from 'react'
export const Header = () => {
    const [slider, setSlider] = useState("-360px")
    const open = () => {
        if (document.getElementsByClassName("headerSlide")[0].style.top === "-360px") {
            setSlider("75px");
        }
        else {
            setSlider("-360px");
        }
    }
    return <div className="headerMain"> 
    <div className="header">
        <div className="headerBlock">
        <div className="headerMenu" onClick={open}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10H3V4a1 1 0 0 1 1-1h6zm11-6a1 1 0 0 0-1-1h-6v7h7zM4 21h6v-7H3v6a1 1 0 0 0 1 1zm17-1v-6h-7v7h6a1 1 0 0 0 1-1z"/></svg>
        </div>
        <div className="headerLogo">Transmisson.NET</div>
        <div className="headerSlide" style={{top: slider}}>
            <div className="headerSlideButton">Главная</div>
            <div className="headerSlideButton">Каталог</div>
            <div className="headerSlideButton">Корзина</div>
            <div className="headerSlideButton">О нас</div>
        </div>
        </div>
    </div>
    </div>
}