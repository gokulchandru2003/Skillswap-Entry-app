import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-8 py-4
    bg-white/10 backdrop-blur-xl border-b border-white/20 text-white">

      {/* Logo */}
      <h1 className="text-2xl font-bold
      bg-gradient-to-r from-cyan-400 to-blue-500
      bg-clip-text text-transparent">
        SkillSwap
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-6">

        <Link to="/dashboard" className="hover:text-cyan-400">
          Dashboard
        </Link>

        <Link to="/matches" className="hover:text-cyan-400">
          Matches
        </Link>

        <Link to="/messages" className="hover:text-cyan-400">
          Messages
        </Link>

        {/* Profile Icon */}
        <div className="w-9 h-9 flex items-center justify-center
        rounded-full bg-cyan-500 text-black font-bold">
          G
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-400">
          Logout
        </button>

      </div>
    </div>
  );
}