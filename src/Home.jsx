import React, { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";
import Filter from "./components/Filter";
import Stats from "./components/Stats";

const Home = () => {
  const [properties, setProperties] = useState(
    JSON.parse(localStorage.getItem("properties")) || []
  );
  const [filters, setFilters] = useState({ type: "", status: "" });

  const handleAddProperty = (newProperty) => {
    const updatedProperties = [...properties, newProperty];
    setProperties(updatedProperties);
    localStorage.setItem("properties", JSON.stringify(updatedProperties));
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredProperties = properties.filter((property) => {
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesStatus = filters.status
      ? property.status === filters.status
      : true;
    return matchesType && matchesStatus;
  });

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Property Management Dashboard
      </h1>
      <div className="flex justify-between">
        <div>
          <PropertyForm onAddProperty={handleAddProperty} />
        </div>

        <Stats properties={properties} />
      </div>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
