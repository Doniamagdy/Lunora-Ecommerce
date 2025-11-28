import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import ProductCard from "../../components/ui/ProductCard";
import Hero from "../../components/layout/Hero"

function Products() {
     const getData = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
        {
          headers: {
            // Authorization:,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response?.data.data);
      // response?.data?.data?.map((solditem)=>console.log(solditem.sold))

      return response?.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["FetchProducts"],
    queryFn: getData,
  });
  return (

<> 
      <Hero />

    <div>
       {isError ? <p>{error.message}</p> : null}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <FadeLoader color={"#cfb798"} width={5} />{" "}
        </div>
      ) : (
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {data?.map((product) => (
            <ProductCard
              key={product?.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              brand={product.brand.name}
              rating={product.ratingsAverage}
            />
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Products
