import React from "react";
import image1 from "../../assets/premium_photo-1664202526535-c01e4b0c42b7.avif";
import image2 from "../../assets/photo-1562273138-f46be4ebdf33.avif";
import image3 from "../../assets/photo-1543422655-ac1c6ca993ed.avif";

function Banners() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left big panel */}
        <div className="relative md:col-span-2 h-[600px] rounded-lg overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover" src={image1} alt="Season Collection" />

          <div className="absolute inset-0 flex flex-col justify-start items-start p-12 bg-black/20">
            <span className="text-sm tracking-widest text-gray-100">SEASON COLLECTION</span>
            <h2 className="mt-2 text-5xl font-extrabold text-white">50% DISCOUNT</h2>
          </div>
        </div>

        {/* Right column with two stacked panels */}
        <div className="flex flex-col gap-6">
          {/* Top right */}
          <div className="relative h-[280px] rounded-lg overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src={image2} alt="Trendy Shoes" />
            <div className="absolute inset-0 flex flex-col justify-start items-start p-6 bg-black/25">
              <span className="text-xs text-white/90">FROM 999.99</span>
              <h3 className="mt-2 text-3xl font-bold text-white">TRENDY SHOES</h3>
            </div>
          </div>

          {/* Bottom right */}
          <div className="relative h-[280px] rounded-lg overflow-hidden mt-4">
            <img className="absolute inset-0 w-full h-full object-cover" src={image3} alt="Women's Hat" />
            <div className="absolute inset-0 flex flex-col justify-start items-start p-6 bg-black/10">
              <span className="text-xs tracking-widest text-white">UP TO 30% OFF</span>
              <h3 className="mt-2 text-3xl font-bold text-white">WOMEN'S PERFUMES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banners;
