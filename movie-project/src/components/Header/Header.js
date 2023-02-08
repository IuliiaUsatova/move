import "./Header.css";
import logo from '../../image/movie.svg'
import BasketIcon from '../../image/basket.svg'
import ProfileIcon from '../../image/profile.svg'
import { useEffect, useState } from "react";
import { getDataFromBackend } from "../../utils/config";
import { useNavigate } from "react-router";



function Header() {
    //создаем контейнер и присваиваем его юзстейту c аргументами текст, а вторая функция которая этот текс меняет
const [searchText, setSearchText] = useState();
//создаем контейнер для уже полученной из бэка информации
const [data, setData] = useState([]);
//создаем контейнер для выбранного фильма чтобы его сохранить
const [selectedFilm, setSelectedFilm] = useState();

const router = useNavigate();//хук отвечает за перенаправление
//добавляем useEffect для того, чтобы он выполнил логику если меняется searchText в input
useEffect(() => {
if (searchText){
//говорим если есть текст на бэкэнде, который мы ищем направь его нам и запиши в переменную data,setData
getDataFromBackend(searchText).then(res => {
    //и далее мы говорим, если запрос нашелся true, то запиши его в нашу переменную
    //setData, где Respons это искомое поле в объекте на бэкэнде, True пишем так, как оно отражается в бэкенде в кавычках и с большой буквы
if (res.Response === 'True'){
    //записываем полученную информацию, если она нашлась, в объекте за это отвечает Search(массив фильмов)
    setData(res.Search)
}
})
}
}, [searchText])

  return (
    <div className="header__block">
            <div className='header__logo__block'>
                <img alt="" src={logo} className='header__logo__icon'/>
            </div>
            <div className='header__searchIcons__block'>
                <div className='header__search'>
                    {/* в инпут добавляем onChange(при изменении) и говорим, что при изменении текста функция сетсерчтекс сохраняет то, что мы пишем */}
                    <input onChange={(text) => setSearchText(text.target.value)} className='header__search__input' placeholder="Search by Movie name"/>
                    {/* добавялем новый div для выпадающего окна */}
                    <div className="header__search__dropdown">
                        {/* здесь пишем логику, если */}
                        {
                            data.length ? data.slice(0, 6).map(el => {
                                return (
                                    <p className='search__options' onClick ={() => {
                                        setSelectedFilm(el)
                                        setData([])
                                        setSearchText('')
                            }}>{el.Title}</p>)
                            }) : <p className='search__options'>No results</p>
                        }
                    </div>
                </div>
                <div className='header__basketProfile__block'>
                   <div className="header__icons" onClick={() => router('/basket')}>
                    <img src={BasketIcon} alt="" className='header__icons header__basket__logo'/>
                    </div>
                    <div className="header__icons">
                    <img src={ProfileIcon} alt="" className='header__icons header__profile__logo'/>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;
