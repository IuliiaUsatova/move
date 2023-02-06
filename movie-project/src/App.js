import Header from "./components/Header/Header";
import './App.css'
import Slider from "./components/slider/Slider";

function App (props) {
    return (
        //делаем класс для app.css и передаем туда этот класс
        <div className="background">
            <Header />
            <Slider />
        </div>
    )
}

export default App;