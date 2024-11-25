import React from "react";
import avatar from "../../public/apartments.jpeg";

const PropertyCard = ({ property }) => {
  return (
    <div className="p-4 border rounded">
      <img
        src={property.image || avatar}
        alt={property.name}
        className="object-cover w-full h-48 mb-4 rounded"
      />
      <h2 className="mb-2 text-xl font-bold">{property.name}</h2>
      <p>Type: {property.type}</p>
      <p>Status: {property.status}</p>
    </div>
  );
};

export default PropertyCard;
