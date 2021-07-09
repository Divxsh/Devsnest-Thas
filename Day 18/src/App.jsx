import "./style/App.css";
import Box from "./Box";

let BoardColor = [0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0,
                  0,1,0,1,0,1,0,1,
                  1,0,1,0,1,0,1,0
]

function App() {
  return (
    <div className="board">
      {BoardColor.map((item,i) =>{
        return <Box key={i} bcolor = {item}/>
      })}
    </div>
  );
}

export default App;
