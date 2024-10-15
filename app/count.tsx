import { useState, useEffect } from 'react';
import React from 'react';



const CountPage = () => {
    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(0);

    useEffect(() => {
        if (count < target) {
            const interval = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 500);
            return () => clearInterval(interval);
        }
    }, [count, target]);

    const handleClick = () => {
        setTarget((prev) => prev + 5);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-4">{count}</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleClick}
            >
                +5
            </button>
        </div>
    );
};

export default CountPage;

