import React from "react";

type StraightLineProps = {
  color?: string;
  width?: string;
  height?: string;
};

const StraightLine: React.FC<StraightLineProps> = ({
  color = "#31A301",
  width = "290",
  height = "77",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 290 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M289.917 24.6537C290.188 23.8709 289.774 23.0165 288.991 22.7455L276.234 18.3287C275.451 18.0577 274.597 18.4726 274.326 19.2554C274.054 20.0382 274.469 20.8926 275.252 21.1636L286.592 25.0896L282.666 36.4292C282.395 37.2121 282.81 38.0664 283.592 38.3374C284.375 38.6085 285.23 38.1936 285.501 37.4107L289.917 24.6537ZM2 1L0.637237 1.6268C16.4147 35.9296 39.3813 56.1201 65.7563 66.651C92.0853 77.1637 121.687 78.0027 150.712 73.8559C208.733 65.5664 264.943 37.2706 289.155 25.5122L288.5 24.1629L287.845 22.8136C263.557 34.6087 207.767 62.674 150.288 70.886C121.563 74.9899 92.5397 74.1148 66.8687 63.8649C41.2437 53.6334 18.8353 34.013 3.36276 0.373201L2 1Z"
        fill={color}
      />
      <defs>
        <linearGradient
          id="paint0_linear_104_6281"
          x1="-14.5"
          y1="1.5"
          x2="215.5"
          y2="83.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#123D00" stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StraightLine;
