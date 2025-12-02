import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ui/ProductCard";
import NoProductFound from "../NoProductFound";
import toastify from "../../utils/toastify";

function SpecificCategory() {
  const params = useParams();

  const getSpecificCategory = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?category[in]=${params._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response?.data?.data || [];
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { data } = useQuery({
    queryKey: ["specificCategory"],
    queryFn: getSpecificCategory,
  });

  return (
    <div className="pt-24 p-6">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((category) => (
            <ProductCard
              key={category._id}
              id={category._id}
              image={category.imageCover}
              title={category.title}
              brand={category.category.name}
              price={category.price}
              rating={category.ratingsAverage}
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

export default SpecificCategory;
