import { useContext } from "react";
import { ModalContext } from "../../pages/providers/ModalProvider";
import "./Categories.css";


const Categories = () => {
    const categories = useContext(ModalContext)

    return <div className="category__block">
      {
      categories.map(el => <div className="category__item">
        <p className="category__item__text">{el.category}</p>
        </div> )
        }
    </div>
};

export default Categories;