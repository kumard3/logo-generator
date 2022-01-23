import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Svg from "../components/Svg";
import SvgLayout from "../components/SvgLayout";
export default function Home() {
  const [color, setColor] = useState("#FC4343");
  const [nameColor, setNameColor] = useState("#Ffff");
  const [range, setRange] = useState(0);
  const [width, setWidth] = useState("0");
  const [height, setHeight] = useState("0");
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
    <main className=" w-full h-full flex flex-col  justify-center items-center font-[sans-serif] text-white bg-black min-h-screen">
      <Header />
      <Container>
        {" "}
        <Svg
          name={name}
          color={color}
          nameColor={nameColor}
          borderRadius={borderRadius}
          width={width}
          height={height}
        />
        <SvgLayout>
          {" "}
          <input

            type="text"
            value={name}
            className=" bg-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="py-4 w-full flex  justify-around ">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            {color}
          </div>
          <div className="py-4 w-full flex  justify-around ">
            <input
              type="color"
              value={nameColor}
              onChange={(e) => setNameColor(e.target.value)}
            />
            {nameColor}
          </div>
          {/* <input
            type="range"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
          /> */}
          {/* <input
            type="range"
            min="0"
            max="1000"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />{" "}
          <input
            type="range"
            min="0"
            max="1000"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          /> */}
        </SvgLayout>
      </Container>

      <div></div>
      {/* {borderRadius}
      {width} */}
      <div className="flex justify-center items-center my-6">
        <button
          className="border-2 border-white px-3 py-2 rounded-xl "
          onClick={saveDoc}
        >
          Download
        </button>
      </div>
    </main>
  );
}
