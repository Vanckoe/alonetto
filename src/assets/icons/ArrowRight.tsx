import React from "react";

type ArrowRightProps = {
  color?: string;
  width?: string;
  height?: string;
};

const ArrowRight: React.FC<ArrowRightProps> = ({
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
        d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.7574 11.3033C13.4645 11.5962 12.9896 11.5962 12.6967 11.3033C12.4038 11.0104 12.4038 10.5355 12.6967 10.2426L16.9393 6L12.6967 1.75736C12.4038 1.46447 12.4038 0.989591 12.6967 0.696698C12.9896 0.403805 13.4645 0.403805 13.7574 0.696698L18.5303 5.46967ZM0 6L-6.55682e-08 5.25L18 5.25L18 6L18 6.75L6.55682e-08 6.75L0 6Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
