import React from "react";

function ReusableButton({
  type = "button",
  buttonText,
  className="w-full px-4 mt-3 py-2 bg-[#C3A27B] text-white text-sm rounded-md hover:brightness-105 transition cursor-pointer",
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
