import "./index.css";
import Box from "./Box"

 function App() {
  let BoardColor = [0,1,0,1,0,1,0,1,
                    1,0,1,0,1,0,1,0,
                    0,1,0,1,0,1,0,1,
                    1,0,1,0,1,0,1,0,
                    0,1,0,1,0,1,0,1,
                    1,0,1,0,1,0,1,0,
                    0,1,0,1,0,1,0,1,
                    1,0,1,0,1,0,1,0];
  return (
   <div className="container">
     {BoardColor.map((color,i) =>{
       return <Box key={i} backgroundColor={color}/>
     })}
   </div>
  );
}

export default App;