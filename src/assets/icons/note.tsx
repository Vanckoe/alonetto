import React from "react";

type NoteProps = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Note: React.FC<NoteProps> = ({
  color = "#31A301",
  width = "31",
  height = "32",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.7555 31.2757L12.4343 20.769L3.63797 26.6604L0 20.2532L9.47502 15.6378L0 11.0225L3.63797 4.61534L12.4343 10.5067L11.7555 0H19.0586L18.3528 10.5067L27.149 4.61534L30.787 11.0225L21.3392 15.6378L30.787 20.2532L27.149 26.6604L18.3528 20.769L19.0586 31.2757H11.7555Z"
        fill={color}
      />
    </svg>
  );
};

export default Note;
