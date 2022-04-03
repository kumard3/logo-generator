import SvgLayout from "./SvgLayout";

export default function Svg({
  name,
  color,
  nameColor,
  borderRadius,
  width,
  height,
  fontSize,
}: any) {
  return (
    <SvgLayout>
      <div className="flex justify-center items-center">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="75" cy="75.5" rx="75" ry="75.5" fill={color} />
          <text
            x={`${width}`}
            y={`${height}`}
            fontFamily="Verdana"
            fontSize={fontSize}
            fill={nameColor}
          >
            {name}
          </text>
        </svg>
      </div>
    </SvgLayout>
  );
}
