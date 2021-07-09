import '../Style/Calorie.css'
import Card from './Box'

const calorieArr = [
    {
        title: "Pizza",
        calorie:56
    },
    {
        title: "Coke",
        calorie:46
    },
    {
        title: "Burger",
        calorie:86
    },
    {
        title: "Momos",
        calorie:26
    },
    {
        title: "French fries",
        calorie:76
    },
    {
        title: "Pani puri",
        calorie:45
    }
]
export default function CaloriePage(){
    return (
        <div className="page">
            <div className="calorieBox">
                {calorieArr.map((item) =>{
                    return <Card title={item.title} calorie={item.calorie}/>
                })}
            </div>
        </div>
    )
}