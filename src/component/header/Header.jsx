import React from 'react';
import './Header.scss';

import {withNaming} from "@bem-react/classname"
import Menu from '../menu/Menu';
import logo from '../../assets/img/wsd-Logo.svg'

const cn = withNaming({n: "", e:"__", m:"--", v:"_"})
const header = cn('header')

function Header() {
  return (
    <header className={header("")}>
        <div className="container">
            <a href="#" className={header("logo")}>
              <img src={logo} alt="logo"/>
              Веб-стандарты
            </a>
            <Menu>
                
            </Menu>
            <a href="#" className={header("patreon")}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.322 3.91008C12.3518 3.91008 9.1217 7.13968 9.1217 11.1097C9.1217 15.0677 12.3518 18.2878 16.322 18.2878C20.28 18.2878 23.5 15.0677 23.5 11.1097C23.5 7.13968 20.28 3.91008 16.322 3.91008Z" fill="#F96753"/>
                    <path d="M3.5 23.09V3.91H7.02V23.09H3.5Z" fill="#052A49"/>
                </svg>
                Поддержать проект
            </a>
        </div>
    </header>
  );
}

export default Header;
