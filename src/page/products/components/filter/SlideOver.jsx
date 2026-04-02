import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../../../store/slices/filterSlice";
import { FaArrowLeft } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const SlideOver = ({ isOpen, onClose, steps, filteredProducts }) => {
  const [currentStep, setCurrentStep] = useState(null);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const StepContent = () => {
    if (currentStep === null) return null;
    const step = steps.find((s) => s.id === currentStep);

    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setCurrentStep(null)}
            className="flex items-center gap-2 text-gray-700"
          >
            <FaArrowLeft /> {step.title}
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-auto p-4">{step.content}</div>

        {/* Footer buttons */}
        <div className="flex gap-2 p-4 border-t">
          <button
            className="flex-1 border px-3 py-2 rounded"
            onClick={step.onRemoveAll}
          >
            Clear
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
      <div className="bg-white w-[85%] h-full shadow-xl flex flex-col">
        {/* Header */}
        <div className="relative flex flex-col items-center justify-center p-4 border-b">
          <div className="text-center">
            <span className="font-semibold text-lg block">Filter & Sort</span>
            <span className="text-sm text-gray-500">
              {filteredProducts.length} Products
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            <MdClose />
          </button>
        </div>

        {/* Body */}
        {currentStep === null ? (
          <div className="flex flex-col flex-1">
            {/* Scrollable list */}
            <div className="flex-1 overflow-auto p-4">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className="flex justify-between items-center py-4 w-full"
                >
                  <span className="text-gray-700">{step.title}</span>
                  <div className="flex items-center gap-2">
                    {step.value && (
                      <span className="text-sm text-gray-500">
                        {step.value}
                      </span>
                    )}
                    <span className="text-gray-400">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer buttons */}
            <div className="flex gap-2 p-4 border-t">
              <button
                className="flex-1 border px-3 py-2 rounded"
                onClick={() => dispatch(resetFilters(null))}
              >
                Remove All
              </button>
              <button
                className="flex-1 bg-black text-white px-3 py-2 rounded"
                onClick={onClose}
              >
                Apply
              </button>
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
