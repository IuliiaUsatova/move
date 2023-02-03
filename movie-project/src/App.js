import Header from "./components/Header/Header";
import './App.css'

function App (props) {
    return (
        //делаем класс для app.css и передаем туда этот класс
        <div className="background">
            <Header />
        </div>
    )
}

export default App;