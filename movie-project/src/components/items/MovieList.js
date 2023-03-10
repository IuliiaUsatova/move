import "./MovieList.css";
import StarIcon from "../../image/Star.svg";
import UnfilledStars from "../../image/Star 5.svg";
import { ModalContext } from "../../pages/providers/ModalProvider";
import { useContext } from "react";

const MovieList = () => {
  const movies = useContext(ModalContext)

  return (
    <div className="movie__list">
      {movies.map((el, index) => {
        //создаем массив и заполняем его картинкой пустая звезда
  const unfilledStars = Array(5).fill(<img className="movie__rating__image" src={UnfilledStars}/>)
  //далее методом fill мы хотим поменять пустые зведы на заполненные, подставляем картинку полной звезды
  //и указываем от 0 индекса до длинны, приравненной к меньшему целому числу, согласно рейтенгу с бэкенда
  //звезды заполняются полными 
  unfilledStars.fill(<img className="movie__rating__image" src={StarIcon}/>, 0, Math.floor(el.rating));

        return (
          <div className="movie__item">
            <img className="movie__image" src={el.image} />
            <div className="movie__info__block">
              <h3 className="movie__info__title">{el.title}</h3>
              <p className="movie__info__content">{el.description}</p>
              <div className="movie__rating__block">
                <button className="movie__show__btn">Посмотреть</button>
                <div className="movie__ratings">
{
 unfilledStars.map(el => el)//здесь передаем наш массив уже перезаписанный с учетом fill
}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
