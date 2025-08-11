import React from 'react';

type SlideRightProps = {
    color?: string;
    width?: string;
    height?: string;
    className?: string;
};

const SlideRight: React.FC<SlideRightProps> = ({
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
                d="M1.26365 18L-4.44345e-07 16.7348L7.50999 8.98813L6.7091 8.16196L6.71365 8.1668L0.0409194 1.28408L1.28545 7.6185e-07C3.13 1.9017 8.27909 7.21243 10 8.98813C8.72182 10.3075 9.9682 9.0216 1.26365 18Z"
                fill={color}
            />
        </svg>
    );
};

export default SlideRight;
