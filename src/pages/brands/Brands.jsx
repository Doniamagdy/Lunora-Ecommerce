import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import toastify from "../../utils/toastify";


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
   

      return response?.data?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");
      
    }
  };

  const { data } = useQuery({
    queryKey: ["allBrands"],
    queryFn: getAllBrands,
  });

  return (
    <div className="my-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  <Slider {...settings}>
    {data?.map((brand) => (
      <Link
        key={brand._id}
        to={`/specific-brand/${brand._id}`}
        className="flex items-center justify-center px-2"
      >
        <img
          src={brand.image}
          alt="brand"
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mx-auto"
        />
      </Link>
    ))}
  </Slider>
</div>
  );
}

export default Brands;
