import React from "react";
import image from "../../assets/Untitled design.png";
function AuthSide() {
  return (
    <div className="md:w-1/2 w-full  flex flex-col justify-center items-center text-white  relative z-10">
      <div className="w-full h-screen relative">
        <img src={image} className="w-full h-full object-cover" />

        {/* Example overlay for text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white"></div>
      </div>
    </div>
  );
}

export default AuthSide;
