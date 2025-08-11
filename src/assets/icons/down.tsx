import React from "react";

type DownProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Down: React.FC<DownProps> = ({
  color = "white",
  width = "9",
  height = "8",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.06119 7.47171L0 0.107422L1.17925 0.107422L4.44023 6.14806L4.33193 6.09391H4.56056L4.45226 6.14806L7.71325 0.107422L8.89249 0.107422L4.83131 7.47171H4.06119Z"
        fill={color}
      />
    </svg>
  );
};

export default Down;
