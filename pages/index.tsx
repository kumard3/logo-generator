import React, { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const svg = `<svg
width="200"
height="151"
viewBox="0 0 300 "
fill="none"
xmlns="http://www.w3.org/2000/svg">
<ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill="#FC4343" />
<text x="90" y="80" fontFamily="Verdana" fontSize="35" fill="blue">
  ${name}
</text>
</svg>`;
  const saveDoc = () => {
    const element = document.createElement("a");
    const file = new Blob([svg], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `logo.svg`;
    document.body.appendChild(element);
    element.click();
  };
  return (
    <main className=" w-full h-full font-[sans-serif]">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={saveDoc}>Download</button>
    </main>
  );
}
