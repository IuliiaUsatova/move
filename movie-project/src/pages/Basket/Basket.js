import { useContext } from "react";
import { ModalContext } from "../../pages/providers/ModalProvider";
import "./Basket.css";


const Basket = () => {
    const categories = useContext(ModalContext)
    return <div className="basket">
    <div className="basket__block">
        <div className="basket__block__item">
            <img className="movie__in__basket" src=""/>
            <div className="movie__info__block">
              <h3 className="movie__info__title"></h3>
              <p className="movie__info__content"></p>
        <div><p className="movie__prise"></p></div>      
            </div>
            <div><p className="total__price">`Total`</p></div>
        <button className="basket__show__btn">Execute payment</button>
   </div>
    </div>
    </div>
};

export default Basket;