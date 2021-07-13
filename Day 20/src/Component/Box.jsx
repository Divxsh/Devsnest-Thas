import "../Style/Box.css"

export default function Box({title,calorie,calorieArr,setCalorie}){
    function dltbtn(e){
        let newArr = calorieArr.filter((item) => {
            return item.title !== title
        })
        setCalorie(newArr)
    }
    return (
        <div className="box">
            <h2>{title}</h2>
            <p>You have consumed  <strong style={{color:"red"}}>{calorie}</strong> calories today.</p>
            <button onClick={dltbtn} className="dlt-btn"> Delete </button>
        </div>
    )
}