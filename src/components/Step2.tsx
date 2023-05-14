import React, { useState } from 'react';

interface Step2Props {
    firstName: string;
    lastName: string;
    onNext: (email: string) => void;
    onPrevious: () => void;
}

const Step2: React.FC<Step2Props> = ({ firstName, onNext, onPrevious }) => {
    const [email, setEmail] = useState('');

    const handleNext = () => {
        if (email.trim() !== '') {
            onNext(email);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Enter your email</h2>
            <p className="mb-4">Hello, {firstName} ! Please enter your email address:</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <button
                onClick={onPrevious}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
            >
                Previous
            </button>
            <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Step2;
