import React from "react";

const Filter = ({ filters, onFilterChange }) => {
  return (
    <div className="flex items-center justify-between pt-12 mb-6">
      <div>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange("type", e.target.value)}
          className="p-2 border rounded cursor-pointer"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange("status", e.target.value)}
          className="p-2 ml-5 border rounded cursor-pointer"
        >
          <option value="">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
      </div>

      <button className="px-5 py-2 font-semibold text-white bg-orange-600 rounded-lg">
        Show All
      </button>
    </div>
  );
};

export default Filter;
