import React from "react";
import { VscClose } from "react-icons/vsc";

const DeleteModal = ({ title, itemName, onClose, onConfirm }) => {
  if (!itemName) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-gray-800">
            {title || "Delete"}
          </h2>

          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <VscClose />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-800">
              {itemName}
            </span>
            ?
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteModal;