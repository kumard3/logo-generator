import React, { useState } from "react";
import Svg from "../components/Svg";
export default function Home() {
  const [color, setColor] = useState("#FC4343");
  const [nameColor, setNameColor] = useState("#Ffff");
  const [range, setRange] = useState(0);
  const [borderRadius, setBorderRadius] = useState("0");
  const [name, setName] = useState("");
  const svg = `<svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill='${color}' />
            <text x="90" y="80" font-family="Nunito Sans" font-size="35" fill='${nameColor}'>
            ${name}
            </text>
            </svg>`;
  function saveDoc() {
    const element = document.createElement("a");
    const file = new Blob([svg], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `logo.svg`;
    document.body.appendChild(element);
    element.click();
  }
  return (
    <main className=" w-full h-full flex flex-col  font-[sans-serif]">
      <div>  <Svg
        name={name}
        color={color}
        nameColor={nameColor}
        borderRadius={borderRadius}
      /></div>
      <div>      <input
        type="text"
        value={name}
        className="bg-white border-2 border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        onChange={(e) => setName(e.target.value)}
      />
     </div>
      <div>      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      {nameColor}
      <input
        type="color"
        value={nameColor}
        onChange={(e) => setNameColor(e.target.value)}
      />
      <input
        type="range"
        value={borderRadius}
        onChange={(e) => setBorderRadius(e.target.value)}
      /></div>



      {borderRadius}
      <button onClick={saveDoc}>Download</button>
    </main>
  );
}
