import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-6xl md:text-7xl font-bold">
          Coding <br /> Gita
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Smart, simple, and reliable attendance for modern classrooms.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
          Go to Dashboard
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-20 w-full max-w-4xl">

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">
            Role-based dashboards
          </h3>

          <p className="text-gray-400 text-sm">
            Admin, Mentor, and Student experiences tailored to their needs.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">
            Fast and secure access
          </h3>

          <p className="text-gray-400 text-sm">
            Encrypted sessions and streamlined navigation.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;