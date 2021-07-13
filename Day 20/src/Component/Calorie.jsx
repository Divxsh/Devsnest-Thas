import React,{useState} from 'react'
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
    let [calorie,setCalorie]  = useState(calorieArr)
    let blank = React.createElement("h2",{style:{textAlign:"center"}},"No Entries")
    return (
        <div className="page">
            <div className="calorieBox">
                {calorie.map((item,i) =>{
                    return <Card  key={i} title={item.title} calorie={item.calorie} calorieArr={calorie}  setCalorie ={setCalorie} />
                })}
                {calorie.length === 0 ?blank:""}
            </div>
        </div>
    )
}