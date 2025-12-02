import { useState } from "react";
import Input from "./Input";
import { FaEye } from "react-icons/fa6";

function PasswordInput({ type, placeholder ,...props }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">

      <Input
        {...props}
        type={show ? "text" : "password"}
        placeholder={placeholder}
      />

      <FaEye
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 bottom-4 text-lg cursor-pointer text-gray-500"
      >
        {show ? "Hide" : "Show"}
      </FaEye>
    </div>
  );
}

export default PasswordInput;
