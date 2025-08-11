import React from 'react';

type ToTopProps = {
    color?: string;
    width?: string;
    height?: string;
    className?: string;
};

const ToTop: React.FC<ToTopProps> = ({
    color = 'white',
    width = '17',
    height = '13',
    className,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M13.0332 12.2378L12.9248 12.0366L8.44629 3.7417L3.96777 12.0366L3.85937 12.2378L1.24414 12.2378L1.55664 11.6704L7.54297 0.814941L7.65234 0.616699L9.24024 0.616699L9.34961 0.814941L15.3359 11.6704L15.6484 12.2378L13.0332 12.2378Z"
                fill={color}
                stroke={color}
                strokeWidth="0.766189"
            />
        </svg>
    );
};

export default ToTop;
