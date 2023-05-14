import React from 'react';

interface Step3Props {
    firstName: string;
    lastName: string;
    email: string;
    onPrevious: () => void;
    onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ firstName, lastName, email, onPrevious, onSubmit }) => {
    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Step 3</h2>
            <p className="mb-4">Hello, {firstName} {lastName}!</p>
            <p className="mb-4">Your email address is: {email}</p>
            <button
                onClick={onPrevious}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
            >
                Previous
            </button>
            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default Step3;