import "./index.css";


function Box({backgroundColor})
{
    let BoxColor = backgroundColor === 1 ? "white" : "black";
    return (
        <div className="box" style={{backgroundColor:BoxColor}}></div>
    )
}
export default Box;
 