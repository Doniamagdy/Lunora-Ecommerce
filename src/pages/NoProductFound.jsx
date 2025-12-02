import NoProduct from "../assets/brand-identity.png";

function NoProductFound() {
  return (
    <div>
    <img src={NoProduct} className="w-96" alt="shopping bag"/>
      <p className="text-gray-700 text-xl font-medium text-center">No products found</p>
    </div>
  );
}

export default NoProductFound;

 