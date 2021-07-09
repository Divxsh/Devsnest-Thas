import './style/Box.css'

export default function Box({bcolor}){
    let boxColor = bcolor === 0 ? "black" : "white";
   return (
    <div className="box" style={{backgroundColor:boxColor}}>

    </div>
   ) 
}