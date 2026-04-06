import React from "react";

const FilterDropdown = ({ options = [], selected, onChange }) => {
  return (
    <div className="mb-4">
      <select
        className="border px-3 py-2 rounded-md bg-white shadow-sm focus:outline-none"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;