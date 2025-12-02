import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import AuthSide from "../ui/AuthSide";
import { useNavigate } from "react-router-dom";
import toastify from "../../utils/toastify";

function VerifyCode() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const verifyCode = async (data) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        {
          resetCode: data.resetCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

   
      navigate("/resetPassword");
      return response?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");

    }
  };

  const { mutate } = useMutation({
    mutationKey: ["verifyCode"],
    mutationFn: verifyCode,
  });

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* Left side (form) */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Verify Reset Code
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter the 6-digit code sent to your email.
          </p>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Code Input */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Reset Code
              </label>

              <Input
                type="text"
                placeholder="Enter your code"
                {...register("resetCode", { required: "OTP is required " })}
              />

               {errors.resetCode && (
                <span className="text-red-500 mt-1">
                  {errors.resetCode.message}
                </span>
              )}
            </div>

            {/* Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#F5F0BF] py-3 px-10 hover:opacity-90 transition-all duration-300 cursor-pointer "
              >
                Verify Code
              </button>
            </div>
          </form>
        </div>
      </div>

      <AuthSide />
    </div>
  );
}

export default VerifyCode;
