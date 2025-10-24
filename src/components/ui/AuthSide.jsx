import React from "react";

function AuthSide({ icon, title, subtitle }) {
  return (
    <div className="md:w-1/2 w-full bg-gradient-to-b from-[#d9c2a5] to-[#cfb798] flex flex-col justify-center items-center text-white p-8 relative z-10">
      <div className="text-center space-y-4">
        <div className="bg-white/20 w-20 h-20 flex justify-center items-center mx-auto rounded-full">
          <span className="text-4xl font-bold">{icon}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <p className="text-sm md:text-base text-white/90">{subtitle} </p>
      </div>
    </div>
  );
}

export default AuthSide;
