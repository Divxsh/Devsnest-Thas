import "./style/App.css";
import Button from "./Component/Button";

function App() {
  return (
    <div className="App">
      <h2>Counters</h2>
      <div className="counter">
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      </div>
    </div>
  );
}

export default App;
