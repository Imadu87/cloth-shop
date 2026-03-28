import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SlideOver = ({ isOpen, onClose, steps }) => {
  const [currentStep, setCurrentStep] = useState(null);

  if (!isOpen) return null;

  const StepContent = () => {
    if (currentStep === null) return null;
    const step = steps.find((s) => s.id === currentStep);
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={() => setCurrentStep(null)}
            className="flex items-center gap-2"
          >
            <FaArrowLeft /> Back
          </button>
          <span className="font-semibold">{step.title}</span>
          <span></span>
        </div>

        {/* Body */}
        <div className="flex-1 p-4 overflow-auto">{step.content}</div>

        {/* Footer */}
        <div className="flex gap-2 p-4 border-t">
          <button
            className="flex-1 border px-3 py-2 rounded"
            onClick={step.onRemoveAll}
          >
            Remove All
          </button>
          <button
            className="flex-1 bg-black text-white px-3 py-2 rounded"
            onClick={step.onApply}
          >
            Apply
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex justify-end">
      <div className="bg-white w-full max-w-sm h-full">
        {currentStep === null ? (
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Filter & Sort</span>
              <button onClick={onClose}>X</button>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-auto">
              {steps.map((step) => (
                <button
                  key={step.id}
                  className="flex justify-between items-center p-3 border rounded"
                  onClick={() => setCurrentStep(step.id)}
                >
                  <span>{step.title}</span>
                  <span>&gt;</span>
                </button>
              ))}
            </div>

            <div className="mt-auto text-center text-gray-500">
              100 Products
            </div>
          </div>
        ) : (
          <StepContent />
        )}
      </div>
    </div>
  );
};

export default SlideOver;