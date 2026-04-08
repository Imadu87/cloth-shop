import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";

const OrderViewModal = ({ order, onClose, onStatusChange, fields }) => {
  const [status, setStatus] = useState(order.status);

  const handleSubmit = () => {
    onStatusChange(order.id, status);
    onClose();
  };

  const getValue = (obj, path) => {
    return path.split(".").reduce((o, p) => o?.[p], obj);
  };

  const badgeColor =
    status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <button onClick={onClose}>
            <VscClose />
          </button>
        </div>

        <div className="p-6 space-y-6">

          {/* Product Images */}
          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <div className="flex gap-3 flex-wrap">
              {order.products.map((p) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>

          {/* Products Details */}
          <div>
            <h3 className="font-semibold mb-3">Product Details</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-left">Price</th>
                    <th className="p-2 text-left">Qty</th>
                    <th className="p-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((p) => (
                    <tr key={p.id} className="border-t">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">Rs {p.price}</td>
                      <td className="p-2">{p.qty}</td>
                      <td className="p-2">Rs {p.price * p.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order + Customer Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields?.map((field) => (
              <div key={field.key}>
                <span className="text-gray-500">{field.label}: </span>
                <span className="font-medium">
                  {getValue(order, field.key)}
                </span>
              </div>
            ))}
          </div>

          {/* Status */}
          <div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${badgeColor}`}
            >
              {status}
            </span>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block mb-2 font-medium">
              Change Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-5 border-t">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderViewModal;