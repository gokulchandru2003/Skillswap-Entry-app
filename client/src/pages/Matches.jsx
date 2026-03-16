import Navbar from "../components/Navbar";

export default function Matches() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-8
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">

        <h1 className="text-3xl font-bold mb-6 text-cyan-400">
          Your Matches
        </h1>

        <p>AI matched users will appear here.</p>

      </div>
    </>
  );
}