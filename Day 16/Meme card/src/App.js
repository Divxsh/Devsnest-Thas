import "./App.css";
import meme from "./meme.jpg";

function App() {
  return (
    <div className="card">
      <div className="img">
        <img src={meme} alt="" />
        <p className="text">Meme Card Using React js</p>
      </div>
    </div>
  );
}

export default App;
