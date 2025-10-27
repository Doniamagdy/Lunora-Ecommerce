import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brands() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const getAllBrands = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["allBrands"],
    queryFn: getAllBrands,
  });

  return (
    <div className="gap-6 my-8 mx-auto w-7xl">
      <Slider {...settings}>
        {data?.map((brand) => (
          <div key={brand._id}>
            <img src={brand.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brands;
