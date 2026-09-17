

"use client";
import { useState } from "react";

export default function RegisterLawyerPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [city, setCity] = useState("");
const [specialization, setSpecialization] = useState("");
const [experience, setExperience] = useState("");
const [languages, setLanguages] = useState("");
const [consultationFee, setConsultationFee] = useState("");
const [bio, setBio] = useState("");
const [degree, setDegree] = useState("");
const [barCouncilId, setBarCouncilId] = useState("");
const handleRegister = async () => {

  const lawyerData = {
    name,
    email,
    password,
    phone,
    specialization,
    city,
    experience: Number(experience),
    languages,
    consultationFee: Number(consultationFee),
    bio,
    degree,
    barCouncilId,
    verified: false,
  };

  console.log("LAWYER DATA =", lawyerData);

  try {

    const response = await fetch(
      "http://localhost:8080/api/lawyers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lawyerData),
      }
    );

    if (response.ok) {
      alert("Lawyer registered successfully!");
    } else {
      alert("Registration failed!");
    }

  } catch (error) {

    console.error(error);
    alert("Server connection failed!");

  }
};
    return (
        <main className="min-h-screen bg-slate-100 py-10 px-4">

  <header className="border-b bg-white rounded-2xl shadow-sm mb-8">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-900 p-3 text-white">
          ⚖️
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Legalease
          </h1>

          <p className="text-xs text-slate-500">
            Your Legal Partner
          </p>
        </div>
      </div>

      <button className="rounded-lg bg-blue-900 px-5 py-2 text-white">
        Register as Lawyer
      </button>

    </div>
  </header>
        <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">

  <div className="mb-4 text-4xl text-amber-600">
    👤
  </div>

  <p className="font-semibold uppercase tracking-widest text-amber-600">
    JOIN LEGALEASE
  </p>

  <h1 className="mt-4 text-5xl font-bold text-slate-900">
    Lawyer Registration
  </h1>

  <p className="mt-4 text-slate-600">
    Create your lawyer profile and help clients find the right legal expertise.
  </p>

</div>

    

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Personal Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Full Name
              </label>
             <input
  type="text"
  placeholder="Enter your full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-xl border border-slate-300 p-3 text-black"
/>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
               value={email}
onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
               value={phone}
onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
               value={password}
onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

          </div>

          <h2 className="mt-12 mb-6 text-2xl font-bold text-slate-900">
            Professional Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Specialization
              </label>
              <input
                type="text"
                placeholder="Criminal Law"
               value={specialization}
onChange={(e) => setSpecialization(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Experience (Years)
              </label>
              <input
                type="number"
                placeholder="5"
              value={experience}
onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Languages
              </label>
              <input
                type="text"
                placeholder="English, Hindi, Kannada"
               value={languages}
onChange={(e) => setLanguages(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Consultation Fee
              </label>
              <input
                type="number"
                placeholder="500"
               value={consultationFee}
onChange={(e) => setConsultationFee(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                City
              </label>
              <input
                type="text"
                placeholder="Pune"
               value={city}
onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Degree
              </label>
              <input
                type="text"
                placeholder="LLB / LLM"
               value={degree}
onChange={(e) => setDegree(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Bar Council ID
              </label>
              <input
                type="text"
                placeholder="Enter Bar Council ID"
              value={barCouncilId}
onChange={(e) => setBarCouncilId(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-black"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block font-medium text-slate-700">
              Bio
            </label>

            <textarea
              rows={5}
              placeholder="Tell clients about yourself..."
             value={bio}
onChange={(e) => setBio(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 text-black"
            />
          </div>
<button
  type="button"
  onClick={handleRegister}
  className="mt-8 w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800"
>
  Register Lawyer
</button>
        </div>
      </div>
    </main>
  );
}