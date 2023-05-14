import React, { useState } from 'react';

interface Step1Props {
    onNext: (firstName: string, lastName: string) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleNext = () => {
        if (firstName.trim() !== '' && lastName.trim() !== '') {
            onNext(firstName, lastName);
        }
    };

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-4">Enter your first name & Last Name</h2>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="border border-gray-300 p-2 rounded mb-4 w-full"
            />
            <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Step1;

