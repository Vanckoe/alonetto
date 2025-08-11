import React from "react";

type UpProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Up: React.FC<UpProps> = ({
  color = "white",
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
        d="M22 12.2481L17.9268 12.2481L11 4.53516L4.07324 12.248L0.000974421 12.248L11 1.92313e-06L22 12.2481Z"
        fill={color}
      />
    </svg>
  );
};

export default Up;
