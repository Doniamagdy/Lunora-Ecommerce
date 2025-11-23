import React from "react";
import NoProduct from "../assets/brand-identity.png";

function NoProductFound() {
  return (
    <div className="w-10/12 mx-auto text-center flex flex-col items-center justify-center">
      
      <img
        src={NoProduct}
        alt="No products"
      />

      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-3">
        No Products found in this section
      </h2>

    </div>
  );
}

export default NoProductFound;
