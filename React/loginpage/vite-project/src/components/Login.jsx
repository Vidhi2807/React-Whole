import { useState } from "react";

function Login() {
  const [role, setRole] = useState(() => localStorage.getItem("role") || "Student");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");

  const roles = ["Student", "Mentor", "Admin"];

    const handleRoleChange = (r) => {
      setRole(r);
      localStorage.setItem("role", r);
    };
  
    const handleSignIn = () => {
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);
    };
  




    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl p-8 w-[380px] text-white shadow-xl">
          <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>

          <p className="text-gray-400 text-sm text-center mb-6">
            Sign in to your account
          </p>

 
          <div className="mb-5 order-1">
            <p className="text-sm mb-2 text-gray-300">Role</p>
            <div className="flex gap-2">
              {roles.map((r) => (
                <button
                  key={r}
                  onClick={() => handleRoleChange(r)}
                  className={`px-3 py-1 text-sm rounded-md border transition 
                  ${
                    role === r
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-700 text-gray-300"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300">University UID</label>
            <input
              type="email"
              placeholder="reena@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="mb-5">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            onClick={handleSignIn}
            className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition"
          >
            Sign in
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Use your role-based credentials. Contact admin if you need help.
          </p>
        </div>
      </div>
    );
}

export default Login;

