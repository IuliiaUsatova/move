import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
import Categories from '../components/categories/Categories';
import Basket from '../pages/Basket/Basket';

//Router -> react-router
//Browser -> react-router-dom
//Navigate -> переадресация
// BrowserRouter -> компонент (сервис) который взаимодействует с React-маршрутизацией и реальным DOM.
// Routes -> компонент который собирает все Route компоненты
// Route -> компонент, в котором передается путь и соответствующий компонент
// Router -> react-router
// BrowserRouter -> react-router-dom

const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Navigate to={'/movie'}/>} />
    <Route path={'/movie'} element={<Main />}/>
    <Route path={'/categories'} element={<Categories />} />
    <Route path={'*'} element={<div>Error! Page not found. 404</div>} />
    <Route path={'/basket'} element={<Basket />} />
    </Routes>
    </BrowserRouter>
}

export default Router