import { useContext } from "react";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import AuthSide from "../ui/AuthSide";
import toastify from "../../utils/toastify";
import { AuthContext } from "../../context/AuthProvider";
import PasswordInput from "../ui/PasswordInput";

function Login() {
  const { setLoggedIn , updateToken} = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendLoginData = async (data) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const token = response.data.token;
      localStorage.setItem("LunoraToken", token);
      updateToken(token);
      setLoggedIn(true);
      localStorage.setItem("LunoraUserEmail", response.data.user.email);
      localStorage.setItem("LunoraUserName", response.data.user.name);
      toastify("Welcome back!", "success");
      navigate("/home");


      return response?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["loginData"],
    mutationFn: sendLoginData,
  });

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* left side */}

      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10 ">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Sign In
          </h2>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                E-mail Address
              </label>

              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>

              <PasswordInput
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="submit"
                className="w-1/2 bg-[#F5F0BF] font-bold  py-3 px-10 hover:opacity-90 transition-all duration-300 cursor-pointer "
              >
                Sign In
              </button>

              <Link
                to="/forgetPassword"
                type="button"
                className="w-1/2 border border-[#cfb798] text-[#a48763] py-3 px-10 text-center hover:bg-[#F5F0BF] hover:text-gray-900  transition-all duration-300 cursor-pointer "
              >
                Forget Password
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* right side */}

      <AuthSide />
    </div>
  );
}

export default Login;
