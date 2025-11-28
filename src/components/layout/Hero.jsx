import HeroImage from "../../assets/Untitled design (1).png";

function Hero() {
  return (
<div className="relative w-full h-[80vh]">
  <img 
    src={HeroImage }
    alt="Hero Banner"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 flex flex-col  justify-center items-center text-white px-10 text-center">
    <h1 className="text-4xl md:text-7xl font-bold drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
    Enjoy your online shopping
    </h1>
    <p className="text-xl md:text-5xl my-4 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)]">
      Up to 50% Off New Season Collection
    </p>
   
  </div>
</div>
  )
}

export default Hero
