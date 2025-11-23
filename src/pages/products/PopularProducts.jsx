import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/ui/ProductCard";

function PopularProducts() {
  const getPopularProducts = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products?sort=-sold"
      );
      console.log(response.data.data);

      const newArray = response?.data.data;
      const mostPopularProducts = newArray.splice(0, 4);

      return mostPopularProducts;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: getPopularProducts,
  });

  return (

    <div className="mt-24"> 
    <h2 className="text-4xl">POPULAR PRODUCTS</h2>
    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {data?.map((popularProduct) => (
        <ProductCard
          id={popularProduct._id}
          image={popularProduct.imageCover}
          title={popularProduct.title}
          price={popularProduct.price}
          brand={popularProduct.brand.name}
          rating={popularProduct.ratingsAverage}
        />
      ))}
    </div>
    </div>
  );
}

export default PopularProducts;
