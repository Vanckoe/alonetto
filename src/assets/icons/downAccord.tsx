import React from "react";

type DownAccordProps = {
  color?: string;
  width?: string;
  height?: string;
};

const DownAccord: React.FC<DownAccordProps> = ({
  color = "black",
  width = "22",
  height = "13",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.07076e-06 -0.00195505L4.07422 -0.00195469L11.001 7.71094L17.9277 -0.00195348L21.999 -0.00195312L11 12.2461L1.07076e-06 -0.00195505Z"
        fill={color}
      />
    </svg>
  );
};

export default DownAccord;
