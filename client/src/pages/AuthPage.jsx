import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthPage({ type }) {

  const isLogin = type === "login";
	const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && !formData.skills.trim()) {
      newErrors.skills = "Skills field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {

    if (isLogin) {
      // LOGIN CHECK
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        alert("Login Successful ✅");
        navigate("/dashboard");
      } else {
        alert("Invalid Email or Password ❌");
      }

    } else {
      // SIGNUP SAVE
      localStorage.setItem("user", JSON.stringify(formData));

      alert("Signup Successful ✅");
      navigate("/dashboard");
    }

  }
};
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative">

      <Link
        to="/"
        className="absolute top-6 left-6 px-4 py-2 rounded-xl 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-white hover:bg-cyan-500 hover:text-slate-900 
        transition duration-300"
      >
        ← Back
      </Link>

      <div className="bg-white/10 backdrop-blur-xl 
      border border-white/20 rounded-3xl p-10 w-[400px]
      shadow-2xl shadow-cyan-500/20 text-white">

        <h2 className="text-3xl font-bold mb-6 text-center
        bg-gradient-to-r from-cyan-400 to-blue-500
        bg-clip-text text-transparent">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 mb-2 rounded-xl bg-white/10 
                border ${errors.name ? "border-red-500" : "border-white/20"}
                focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mb-2">{errors.name}</p>
              )}
            </>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 mb-2 rounded-xl bg-white/10 
            border ${errors.email ? "border-red-500" : "border-white/20"}
            focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mb-2">{errors.email}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 mb-2 rounded-xl bg-white/10 
            border ${errors.password ? "border-red-500" : "border-white/20"}
            focus:outline-none focus:ring-2 focus:ring-cyan-400`}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mb-2">{errors.password}</p>
          )}

          {!isLogin && (
            <>
              <input
                type="text"
                name="skills"
                placeholder="Skills You Teach Or Learn"
                value={formData.skills}
                onChange={handleChange}
                className={`w-full p-3 mb-2 rounded-xl bg-white/10 
                border ${errors.skills ? "border-red-500" : "border-white/20"}
                focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              />
              {errors.skills && (
                <p className="text-red-400 text-sm mb-4">{errors.skills}</p>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl 
            bg-cyan-500 text-slate-900 font-semibold
            shadow-lg shadow-cyan-500/40
            hover:scale-105 hover:bg-cyan-400
            transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
}