import { Link } from "react-router-dom";
import HeroImage from "../../assets/banner.jpg";

function Hero() {
  return (
<div className="relative w-full h-[80vh]">
  <img 
    src={HeroImage }
    alt="Hero Banner"
    className="w-full h-full object-cover"
  />

  <div className=" w-5/12 absolute inset-0 flex flex-col  justify-center text-white px-[40px] text-center">
    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[4px_4px_0px_rgba(0,0,0,0.7)]">
      Discover The Latest Fashion Trends
    </h1>
    <p className="text-xl md:text-2xl mt-4 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)]">
      Up to 50% Off New Season Collection
    </p>
    <Link to={"/products"} className="bg-white my-4 text-black px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
      Shop Now
    </Link>
  </div>
</div>
  )
}

export default Hero
