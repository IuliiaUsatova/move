import Header from "../../components/Header/Header";
import './Main.css'
import Slider from "../../components/slider/Slider";
import MovieList from "../../components/items/MovieList";
import Categories from "../../components/categories/Categories";

function Main (props) {
    return (
        //делаем класс для app.css и передаем туда этот класс
        <div className="background">
            <Header />
            <Slider />
            <div className="movie__body">
            <Categories />
            <MovieList />
            </div>
        </div>
    )
}

export default Main;