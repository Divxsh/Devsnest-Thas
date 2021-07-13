import React, { useState } from "react";

export default function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "DivashGupta",
    password: "123456flip",
    boxes: [],
  });

  async function generateMeme() {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map(
      (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
    );
    console.log(url);

    let res = await fetch(url);
    let data = await res.json();
    setMeme({ ...meme, url: data.data.url });
  }

  return (
    
    <div className="meme">
      
      <img src={meme.url} alt="" />

      <div className="inputs">
        {[...Array(meme.box_count)].map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Box Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>

      <div className="buttons">
        <button onClick={generateMeme}>Generate Meme</button>

        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          New Template
        </button>
      </div>
    </div>
  );
}
