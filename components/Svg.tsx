export default function Svg({
  name,
  color,
  nameColor,
  borderRadius,
  width,
  height
}: any) {
  return (
    //   <div className={`opacity-100 w-[10rem] h-[10rem] `}
    //   style={{backgroundColor:`${color}`,
    //   borderRadius:`${borderRadius}px`
    // }}
    //   >
    //     <svg
    //     id="svg"

    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg">
    //       <ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill={color} />
    //       <text x="90" y="80" fontFamily="Verdana" fontSize="35" fill={nameColor}>
    //         {name}
    //       </text>
    //     </svg>
    //   </div>
    <svg
      id="svg"
      style={{
        backgroundColor: `${color}`,
        borderRadius: `${borderRadius}px`,
        width:`${width}px`,
        height:`${height}px`
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill={color} /> */}
      <text x="90" y="80" fontFamily="Verdana" fontSize="35" fill={nameColor}>
        {name}
      </text>
    </svg>
  );
}
