import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Svg from "../components/Svg";
import SvgLayout from "../components/SvgLayout";

export default function Home() {
  const [color, setColor] = useState("#FC4343");
  const [nameColor, setNameColor] = useState("#Ffff");
  const [fontSize, setFontSize] = useState("60");

  const [xaxis, setXaxis] = useState("40");
  const [yaxis, setYaxis] = useState("92");
  const [borderRadius, setBorderRadius] = useState("0");
  const [name, setName] = useState("😎");

  const svg = `<svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill='${color}' />
            <text            x='${xaxis}'
            y='${yaxis}' font-family="Verdana" font-size='${fontSize}' fill='${nameColor}'>
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
    <main className=" w-full flex flex-col  justify-center items-center font-[sans-serif] text-white bg-black min-h-screen">
      <Header />
      <Container>
        {" "}
        <Svg
          name={name}
          color={color}
          nameColor={nameColor}
          borderRadius={borderRadius}
          width={xaxis}
          height={yaxis}
          fontSize={fontSize}
        />
        <SvgLayout>
          {" "}
          <input
            type="text"
            value={name}
            className=" bg-gray-800 rounded-lg py-2  px-4 block w-full appearance-none leading-normal"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="py-4 w-full flex flex-col justify-around ">
            <h1>Background color </h1>
            <div className="py-4 w-full flex  justify-around ">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              {color}
            </div>
          </div>
          <div className="py-4 w-full flex flex-col justify-around ">
            <h1>Text Color </h1>
            <div className="py-4 w-full flex  justify-around ">
              <input
                type="color"
                value={nameColor}
                onChange={(e) => setNameColor(e.target.value)}
              />
              {nameColor}
            </div>
          </div>
          <div className="py-4 w-full flex flex-col justify-around ">
            <h1>Font Size </h1>
            <div className="py-4 w-full flex  justify-around ">
              <input
                type="range"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
              {fontSize}
            </div>
          </div>
          <div className="py-4 w-full flex flex-col justify-around ">
            <h1>X axis </h1>
            <div className="py-4 w-full flex  justify-around ">
              <input
                type="range"
                value={xaxis}
                onChange={(e) => setXaxis(e.target.value)}
              />
              {xaxis}
            </div>
          </div>
          <div className="py-4 w-full flex flex-col justify-around ">
            <h1>Y axis </h1>
            <div className="py-4 w-full flex  justify-around ">
              <input
                type="range"
                value={yaxis}
                onChange={(e) => setYaxis(e.target.value)}
              />
              {yaxis}
            </div>
          </div>{" "}
        </SvgLayout>
      </Container>
      <div className="flex justify-center items-center my-6">
        <button
          className="border-2 border-white px-3 py-2 rounded hover:bg-white hover:text-black "
          onClick={saveDoc}
        >
          Download
        </button>
      </div>
    </main>
  );
}
