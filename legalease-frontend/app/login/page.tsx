
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  
  const router = useRouter();

    const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
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

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const lawyer = await response.json();

      console.log("Logged in lawyer:", lawyer);

      setMessage("✅ Login Successful");
      localStorage.setItem(
        "loggedInLawyer",
        JSON.stringify(lawyer)
      );
      router.push("/lawyers");
    } catch (error) {
      console.error(error);
      setMessage("❌ Login Failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Lawyer Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 text-black"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 text-black"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white p-3 rounded-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center text-black">
          {message}
        </p>

      </div>
    </main>
  );
}