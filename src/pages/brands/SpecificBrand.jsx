import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/ui/ProductCard";
import { useParams } from "react-router-dom";
import NoProductFound from "../NoProductFound";
import toastify from "../../utils/toastify";


function SpecificBrand() {
  const params = useParams();
  const getSpecificBrand = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?brand=${params._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response?.data?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { data } = useQuery({
    queryKey: ["specificBrand"],
    queryFn: getSpecificBrand,
  });

  return (
    <div className="pt-24 p-6">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((brand) => (
            <ProductCard
              key={brand._id}
              id={brand._id}
              image={brand.imageCover}
              title={brand.title}
              brand={brand.brand.name}
              price={brand.price}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[60vh]">
          <NoProductFound className="w-5/12 mb-6" />
        </div>
      )}
    </div>
  );
}

export default SpecificBrand;
