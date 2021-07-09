import "../Style/Box.css"

export default function Box({title,calorie}){
    return (
        <div className="box">
            <h2>{title}</h2>
            <p>You have consumed  <strong style={{color:"red"}}>{calorie}</strong>  calories today.</p>
        </div>
    )
}