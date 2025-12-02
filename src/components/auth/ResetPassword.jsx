import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import AuthSide from "../ui/AuthSide";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
import toastify from "../../utils/toastify";

function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async (data) => {
    try {
      const response = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        {
          email: data.email,
          newPassword: data.newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
      return response?.data;
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
      {/* Left Side (Form) */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your email and your new password below.
          </p>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">E-mail</label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && (
                <span className="text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                New Password
              </label>
              <Input
                type="password"
                placeholder="Enter your new password"
                {...register("newPassword", {
                  required: "New password is required",
                })}
              />

              {errors.password && (
                <span className="text-red-500 mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Button */}
            <div className=" mt-6">
              <button
                type="submit"
                className="w-full bg-[#F5F0BF]   py-3 px-10 hover:opacity-90 transition-all duration-300 cursor-pointer "
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <AuthSide />
    </div>
  );
}

export default ResetPassword;
