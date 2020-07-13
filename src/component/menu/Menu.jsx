import React, {useState} from 'react';
import './Menu.scss';

import {withNaming} from "@bem-react/classname"

const cn = withNaming({n: "", e:"__", m:"--", v:"_"})
const nav = cn('nav')

function Menu() {

    var menuArr = ["Статьи", "Конференция", "Календарь", "Подкаст", "О проекте"]
    const [openBurger, setOpenBurger] = useState(false)

    if (openBurger === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

  return (
    <div>
        <div className={`burger-menu ${openBurger === true && "burger-menu--open"}`}>
            <nav className={nav("", {m:"mobile"})}>
                {
                    menuArr.map(item => {
                        return (
                            <a href="#" className={nav("item")}>
                                {item}
                            </a>
                        )
                    })
                }
            </nav>
            <a href="#" className={nav("patreon")}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.322 3.91008C12.3518 3.91008 9.1217 7.13968 9.1217 11.1097C9.1217 15.0677 12.3518 18.2878 16.322 18.2878C20.28 18.2878 23.5 15.0677 23.5 11.1097C23.5 7.13968 20.28 3.91008 16.322 3.91008Z" fill="#F96753"/>
                    <path d="M3.5 23.09V3.91H7.02V23.09H3.5Z" fill="#052A49"/>
                </svg>
                Поддержать проект
            </a>
        </div>
        <nav className={nav("")}>
            {
                menuArr.map(item => {
                    return (
                        <a href="#" className={nav("item")}>
                            {item}
                        </a>
                    )
                })
            }
        </nav>
        <div className={`burger-btn ${openBurger === true && "burger-btn--open"}`} onClick={(e) => {setOpenBurger(!openBurger)}}>
            <span></span>
        </div>
    </div>
  );
}

export default Menu;
