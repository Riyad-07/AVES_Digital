import React, { useState } from "react";

const PropertyForm = ({ onAddProperty }) => {
  const [property, setProperty] = useState({
    name: "",
    type: "",
    status: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    console.log(e);

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        localStorage.setItem("propertyImage", base64Image);
        setProperty((prevProperty) => ({
          ...prevProperty,
          image: base64Image,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty(property);
    setProperty({ name: "", type: "", status: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-[600px]">
      <input
        type="text"
        name="name"
        value={property.name}
        onChange={handleChange}
        placeholder="Property Name"
        className="w-full p-2 mb-4 border rounded outline-none"
      />
      <select
        name="type"
        value={property.type}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded cursor-pointer"
      >
        <option value="">Select Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
      </select>
      <select
        name="status"
        value={property.status}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded cursor-pointer"
      >
        <option value="">Select Rental Status</option>
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full p-2 mb-4 border rounded cursor-pointer"
      />
      <button type="submit" className="p-2 text-white bg-blue-500 rounded">
        Add Property
      </button>
    </form>
  );
};

export default PropertyForm;
