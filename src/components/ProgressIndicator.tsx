import React from 'react';

interface ProgressIndicatorProps {
    step: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ step }) => {
    return (
        <div>
            <h3 className="text-5xl font-bold text-center my-24">React Stepper Form</h3>
            <ul className="flex justify-center space-x-4 my-4">
                <li
                    className={`${step === 1 ? 'text-blue-500 font-bold' : 'text-gray-500'
                        }`}
                >
                    Step 1
                </li>
                <li
                    className={`${step === 2 ? 'text-blue-500 font-bold' : 'text-gray-500'
                        }`}
                >
                    Step 2
                </li>
                <li
                    className={`${step === 3 ? 'text-blue-500 font-bold' : 'text-gray-500'
                        }`}
                >
                    Step 3
                </li>
            </ul>
        </div>
    );
};

export default ProgressIndicator;
