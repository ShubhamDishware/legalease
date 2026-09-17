"use client";

import { useState } from "react";

export default function LawyerLoginPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/lawyers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("lawyerId", data.id);

        setMessage("Login Successful!");

        setTimeout(() => {
          window.location.href = `/lawyers/${data.id}`;
        }, 1000);
      } else {
        setMessage("Invalid email or phone number");
      }
    } catch (error) {
      setMessage("Backend not running");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-center text-slate-900">
          Lawyer Login
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Login to manage your profile
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="text-sm font-semibold text-slate-800">
  Email
</label>

        <input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mt-2 w-full rounded-xl border p-3 text-black bg-white"
/>
          </div>

          <div>
           <label className="text-sm font-semibold text-black">
  Phone Number
</label>

           <input
  type="text"
  required
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-black"
 />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-700 py-3 font-bold text-white hover:bg-blue-800"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

     {message && (
  <div className="mt-5 rounded-xl bg-slate-100 p-3 text-center text-black font-semibold">
    {message}
  </div>
)}

      </div>

    </main>
  );
}