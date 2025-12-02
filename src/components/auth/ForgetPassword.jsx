import Input from "../ui/Input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import AuthSide from "../ui/AuthSide";
import { useNavigate } from "react-router-dom";
import toastify from "../../utils/toastify";


function ForgetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async (data) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        {
          email: data.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/verifyCode");
      return response;
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    mutationKey: ["resetPassword"],
  });

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* Left side (form) */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Forgot Your Password?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your email address and we’ll send you a reset code.
          </p>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Email Input */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                E-mail Address
              </label>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: "Email is required " })}
              
              />
               {errors.email && (
                <span className="text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#F5F0BF]  py-3 px-10 hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                Send Reset Code
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side (visual) */}
      <AuthSide />
    </div>
  );
}

export default ForgetPassword;
