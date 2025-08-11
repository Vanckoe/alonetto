import React from "react";

type ArrowLeftProps = {
  color?: string;
  width?: string;
  height?: string;
};

const ArrowLeft: React.FC<ArrowLeftProps> = ({
  color = "white",
  width = "19",
  height = "12",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989591 6.3033 0.696698C6.01041 0.403805 5.53553 0.403805 5.24264 0.696698L0.469669 5.46967ZM19 6L19 5.25L1 5.25L1 6L1 6.75L19 6.75L19 6Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeft;
