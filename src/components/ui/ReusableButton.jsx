import React from "react";

function ReusableButton({
  type = "button",
  buttonText,
  className="w-2/12 px-4 mt-3 py-2 bg-white text-gray-800 border border-stone-400 text-sm  hover:brightness-105 transition cursor-pointer",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {buttonText}
    </button>
  );
}

export default ReusableButton;
