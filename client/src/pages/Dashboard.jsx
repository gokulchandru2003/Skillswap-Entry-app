import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

   const navigate = useNavigate();

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    alert("Logged out successfully 👋");
    navigate("/");
  };
  const users = [
    {
      id: 1,
      name: "Arjun",
      teaches: ["React", "JavaScript"],
      learns: ["UI/UX"],
    },
    {
      id: 2,
      name: "Meera",
      teaches: ["UI/UX", "Figma"],
      learns: ["React"],
    },
    {
      id: 3,
      name: "Rahul",
      teaches: ["Node.js"],
      learns: ["React", "Design"],
    },
    {
      id: 4,
      name: "Brevis",
      teaches: ["JavaScript"],
      learns: ["UI/UX"],
    },
    {
      id: 5,
      name: "Ayush",
      teaches: ["UI/UX", "Figma"],
      learns: ["Angular"],
    },
    {
      id: 6,
      name: "Rutu",
      teaches: ["Node.js"],
      learns: ["UI/UX"],
    },
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    [...user.teaches, ...user.learns]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  // Simple AI Tag Matching Logic
  const matchSuggestions = users.filter((user) =>
    user.teaches.includes("React")
  );

  return (
     
    <div className="min-h-screen p-8 
    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      
 <button
        onClick={handleLogout}
        className="absolute top-6 right-6 px-4 py-2 rounded-xl
        bg-red-500 text-white font-semibold hover:bg-red-400"
      >
        Logout
      </button>

  

      <h1 className="text-4xl font-bold mb-6 
      bg-gradient-to-r from-cyan-400 to-blue-500 
      bg-clip-text text-transparent">
        SkillSwap Dashboard
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 p-3 rounded-xl 
        bg-white/10 border border-white/20
        focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      {/* AI Match Suggestions */}
      <h2 className="text-2xl mb-4 text-cyan-400">
         AI Recommended Matches
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {matchSuggestions.map((user) => (
          <div key={user.id}
            className="bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-2xl p-6
            shadow-lg shadow-cyan-500/20">

            <h3 className="text-xl font-bold mb-2">{user.name}</h3>

            <p className="text-sm text-slate-300">
              Teaches: {user.teaches.join(", ")}
            </p>
            <p className="text-sm text-slate-300">
              Wants to Learn: {user.learns.join(", ")}
            </p>

            <button className="mt-4 px-4 py-2 rounded-xl
            bg-cyan-500 text-slate-900 font-semibold
            hover:bg-cyan-400 transition">
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* All Users */}
      <h2 className="text-2xl mb-4 text-cyan-400">
         Explore Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id}
            className="bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-2xl p-6
            shadow-lg shadow-cyan-500/20">

            <h3 className="text-xl font-bold mb-2">{user.name}</h3>

            <p className="text-sm text-slate-300">
              Teaches: {user.teaches.join(", ")}
            </p>
            <p className="text-sm text-slate-300">
              Wants to Learn: {user.learns.join(", ")}
            </p>

            <button className="mt-4 px-4 py-2 rounded-xl
            border border-cyan-400
            hover:bg-cyan-500 hover:text-slate-900 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}