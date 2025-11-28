import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReusableButton from "../../components/ui/ReusableButton";
import useAddToCart from "../../hooks/useAddToCart";

function ProductDetails() {
  const params = useParams();
 const{mutate} =useAddToCart()

  let starRating = 0;

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${params._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      starRating = Math.round(data?.ratingsAverage);

      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["singleProduct", params._id],
    queryFn: getSingleProduct,
  });

  return (
    <div className="pt-24 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center ">
          <img
            src={data?.imageCover}
            alt={data?.title}
            className="w-[90%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-square "
          />

          {/* Images */}
          <div className="flex gap-3 justify-center mt-4 ">
            {data?.images.map((productImage, index) => (
              <img
                key={index}
                src={productImage}
                className="w-32 h-32 rounded-lg shadow-md mx-1.5 object-cover  border border-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-1">
            <div className="text-yellow-400 text-lg">
              {"★".repeat(starRating)}
              {"☆".repeat(5 - starRating)}
            </div>
            <span className="text-xs text-gray-500">
              ({data?.ratingsAverage})
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
          <p className=" text-xl font-semibold">
            EGP {data?.price}
          </p>

                  <hr className="my-3" />

          <p className="text-gray-600 leading-relaxed">{data?.description}</p>

          <ReusableButton buttonText="Add to Cart"  onClick={()=> mutate(data?._id)} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
