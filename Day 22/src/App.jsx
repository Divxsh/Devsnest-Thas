import { useState, useEffect } from "react";
import "./Style/App.css";
import Templates from "./Component/Templates";
import Meme from "./Component/Meme";

export default function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);

  return (
    <div className="container">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}
