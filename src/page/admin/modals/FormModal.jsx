import React, { useState, useEffect } from "react";
import { VscClose } from "react-icons/vsc";

const FormModal = ({ onClose, onSubmit, data, fields, title }) => {
  const [form, setForm] = useState({});

  // Edit refill
  useEffect(() => {
    if (data) {
      setForm(data);
    } else {
      setForm({});
    }
  }, [data]);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileChange = (key, file) => {
    setForm((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <VscClose />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto">
          {fields.map((field) => (
            <div
              key={field.key}
              className={field.full ? "md:col-span-2" : ""}
            >
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>

              {/* FILE INPUT */}
              {field.type === "file" ? (
                <>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleFileChange(field.key, e.target.files[0])
                    }
                    className="w-full border rounded-lg p-2"
                  />

                  {/* Preview */}
                  {form[field.key] && typeof form[field.key] !== "object" && (
                    <img
                      src={form[field.key]}
                      alt="preview"
                      className="w-20 h-20 object-cover mt-2 rounded"
                    />
                  )}
                </>
              ) : field.type === "textarea" ? (
                <textarea
                  value={form[field.key] || ""}
                  onChange={(e) =>
                    handleChange(field.key, e.target.value)
                  }
                  className="w-full border rounded-lg p-2"
                  rows={3}
                />
              ) : (
                <input
                  type={field.type || "text"}
                  value={form[field.key] || ""}
                  onChange={(e) =>
                    handleChange(field.key, e.target.value)
                  }
                  className="w-full border rounded-lg p-2"
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-5 border-t">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;