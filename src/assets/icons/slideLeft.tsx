import React from 'react';

type SlideLeftProps = {
    color?: string;
    width?: string;
    height?: string;
    className?: string;
};

const SlideLeft: React.FC<SlideLeftProps> = ({
    color = 'white',
    width = '10',
    height = '18',
    className,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.73636 1.52751e-06L10 1.26519L2.49001 9.01187L3.29091 9.83804L3.28636 9.8332L9.95908 16.7159L8.71455 18C6.87 16.0983 1.72091 10.7876 1.57154e-06 9.01187C1.27818 7.69247 0.0318066 8.9784 8.73636 1.52751e-06Z"
                fill={color}
            />
        </svg>
    );
};

export default SlideLeft;
