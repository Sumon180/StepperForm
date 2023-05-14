import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressIndicator from './ProgressIndicator';

interface StepFormProps {
    email: string;
}

const StepForm: React.FC<StepFormProps> = () => {
    const [step, setStep] = useState<number>(1);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleNext = (value: string): void => {
        if (step === 1) {
            setFirstName(value);
            setLastName(value);
        } else if (step === 2) {
            setEmail(value);
        }

        setStep(step + 1);
    };

    const handlePrevious = (): void => {
        setStep(step - 1);
    };

    const handleSubmit = (): void => {
        console.log('Form submitted!');
        console.log({ firstName, lastName, email });
    };

    const steps = [
        <Step1 onNext={handleNext} />,
        <Step2
            firstName={firstName}
            lastName={lastName}
            onNext={handleNext}
            onPrevious={handlePrevious}
        />,
        <Step3
            firstName={firstName}
            lastName={lastName}
            email={email}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
        />,
    ];

    const currentStepComponent = steps[step - 1] || null;

    return (
        <>
            <div className='flex justify-center bg-slate-100 w-screen h-screen'>
                <div>
                    <ProgressIndicator step={step} />
                    {currentStepComponent}
                </div>
            </div>
        </>
    );
};

export default StepForm;
