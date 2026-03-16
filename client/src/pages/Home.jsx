import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">

      <div className="bg-white/10 backdrop-blur-xl 
      border border-white/20 
      rounded-3xl p-12 
      shadow-2xl shadow-cyan-500/20 
      text-center text-white w-[400px]">

        <h1 className="text-5xl font-bold mb-6 
        bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent">
          SkillSwap
        </h1>

        <p className="text-slate-300 mb-8">
          Learn & teach skills with real-time chat,
          voice and video sessions 🚀
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-2 rounded-xl 
            bg-cyan-500 text-slate-900 font-semibold
            shadow-lg shadow-cyan-500/40
            hover:scale-105 hover:bg-cyan-400
            transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-2 rounded-xl 
            border border-cyan-400 text-white
            hover:bg-cyan-500 hover:text-slate-900
            transition duration-300"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}