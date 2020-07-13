import React from 'react';
import './Cards.scss';

import cardBg from "../../assets/img/card-bg.svg"
import user1 from "../../assets/img/user-1.png"
import user2 from "../../assets/img/user-2.png"
import user3 from "../../assets/img/user-3.png"
import {withNaming} from "@bem-react/classname"

const cn = withNaming({n: "", e:"__", m:"--", v:"_"})
const cards = cn('cards')
const cardsItem = cn("cards__item")

function Cards() {
  return (
    <section className={cards("")}>
        <div className="container">
            <div className={cards("row")}>
                <a href="#" className={cardsItem("", {m:"black"})}>
                    <h3 className={cardsItem("title")}>
                        Доступные SVG-иконки <br/> с инлайновыми спрайтами
                    </h3>
                    <p className={cardsItem("desc")}>
                        Если мы перестанем раздавать ярлыки типа «JS-разработчик» <br/>или «UX-разработчик», то сможем добиться перемирия <br/>в текущей войне «JS против CSS».
                    </p>
                    <div className={cardsItem("info")}>
                        <p>
                            25 апреля
                        </p>
                        <h4>
                            иван константинопольский
                        </h4>
                    </div>
                    <div className={cardsItem("bg")}>
                        <img src={cardBg} alt="bg"/>
                    </div>
                </a>
                <div className={cards("col")}>
                    <a href="#" className={cardsItem("")}>
                        <h3 className={cardsItem("title")}>
                            Советы по доступности интерактивных элементов на мобильных устройствах
                        </h3>
                        <div className={cardsItem("info")}>
                            <p>
                                4 февраля
                            </p>
                            <h4>
                                Андрей Ситник
                            </h4>
                        </div>
                        <img src={user1} alt="user-img" className={cardsItem("user")}/>
                    </a>
                    <a href="#" className={cardsItem("")}>
                        <h3 className={cardsItem("title")}>
                            Что нового в JavaScript 2019
                        </h3>
                        <div className={cardsItem("info")}>
                            <p>
                                12 марта
                            </p>
                            <h4>
                                Девид Нил
                            </h4>
                        </div>
                        <img src={user2} alt="user-img" className={cardsItem("user")}/>
                    </a>
                </div>
            </div>
            <div className={cards("row")}>
                    <a href="#" className={cardsItem("")}>
                        <h3 className={cardsItem("title")}>
                            Советы по доступности интерактивных элементов на мобильных устройствах
                        </h3>
                        <div className={cardsItem("info")}>
                            <p>
                                4 февраля
                            </p>
                            <h4>
                                Андрей Ситник
                            </h4>
                        </div>
                        <img src={user1} alt="user-img" className={cardsItem("user")}/>
                    </a>
                    <a href="#" className={cardsItem("")}>
                        <h3 className={cardsItem("title")}>
                            Что нового в JavaScript 2019
                        </h3>
                        <div className={cardsItem("info")}>
                            <p>
                                12 марта
                            </p>
                            <h4>
                                Девид Нил
                            </h4>
                        </div>
                        <img src={user3} alt="user-img" className={cardsItem("user")}/>
                    </a>
            </div>
        </div>
    </section>
  );
}

export default Cards;
