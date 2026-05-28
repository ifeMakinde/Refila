// Login.jsx

import { useState } from "react";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    if (isLoggedIn) {
      // Do somethingNAV
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-8">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="bg-orange-500 p-2 rounded-full">
            <Flame className="text-white w-5 h-5" />
          </div>

          <h1 className="text-[18px] lg:text-2xl font-bold text-gray-800">
            Refilia
          </h1>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className=" text-[24px] lg:text-3xl font-bold text-gray-900">
            Welcome back
          </h2>

          <p className="text-gray-500 lg:mt-2 text-sm">
            Login to continue ordering gas refills.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-transparent focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="accent-green-600"
              />
              Remember me
            </label>

            <button type="button" className="text-orange-500 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don’t have an account?{" "}
          <span className="text-orange-500 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
