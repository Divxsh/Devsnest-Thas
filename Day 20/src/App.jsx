import Header from './Component/Header'
import './Style/App.css'
import Calorie from './Component/Calorie'

export default function App (){
    return (
        <div className="container">
            <Header/>
            <Calorie/>
        </div>
    )
}