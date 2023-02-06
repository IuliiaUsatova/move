import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from "../App";
import Categories from '../components/categories/Categories';

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
    <Route path={'/movie'} element={<App />}/>
    <Route path={'/categories'} element={<Categories />} />
    <Route path={'*'} element={<div>Error! Page not found. 404</div>} />
    </Routes>
    </BrowserRouter>
}

export default Router