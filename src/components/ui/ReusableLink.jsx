import React from "react";
import { Link } from "react-router-dom";

function ReusableLink({
  path,
  linkText,
  className = "block text-center w-full px-4 py-2 bg-[#C3A27B] text-white text-sm rounded-md hover:brightness-105 transition",
}) {
  return (
    <Link to={path} className={className}>
      {linkText}
    </Link>
  );
}

export default ReusableLink;
