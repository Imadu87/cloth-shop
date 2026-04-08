import React from "react";
import { VscClose } from "react-icons/vsc";

const ViewModal = ({
  title,
  data,
  fields,
  imageKey,
  badge,
  onClose,
}) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b bg-gray-50 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {badge && (
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${badge.class}`}>
                {badge.text}
              </span>
            )}

            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition"
            >
              <VscClose className="text-xl" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">

          {/* Image */}
          {imageKey && (
            <div className="flex justify-between">
              <div className="border rounded-xl p-3 bg-white shadow-sm">
                <img
                  src={data[imageKey]}
                  alt="preview"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          )}

          {/* Info */}
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

              {fields.map((field) => (
                <p
                  key={field.key}
                  className={field.full ? "md:col-span-2" : ""}
                >
                  <span className="font-medium text-gray-600">
                    {field.label}:
                  </span>{" "}
                  {data[field.key]}
                </p>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewModal;